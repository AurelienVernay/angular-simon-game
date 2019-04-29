import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Howl } from 'howler';
import { interval, Subject } from 'rxjs';
import { map, take, tap, throttleTime } from 'rxjs/operators';

export type Color = 'green' | 'red' | 'yellow' | 'blue';

@Component({
    selector: 'app-simon',
    templateUrl: './simon.component.html',
    styleUrls: ['./simon.component.scss'],
})
export class SimonComponent implements OnInit {
    private blinkingColor: Color;
    private _blinkGreen = new Subject();
    private _blinkRed = new Subject();
    private _blinkYellow = new Subject();
    private _blinkBlue = new Subject();
    private _endPlay = new Subject();
    private _nextRound = new Subject();
    private _howl: Howl;
    private _sequence: Color[] = [];
    public get sequence() {
        return this._sequence;
    }
    public set sequence(array: Color[]) {
        this._sequence = array;
        if (this.sequence.length) {
            interval(1000)
                .pipe(
                    tap(index => console.log('index : ', index)),
                    take(this.sequence.length),
                    tap(index =>
                        console.log(
                            'this.sequence[index] : ',
                            this.sequence[index]
                        )
                    ),
                    map(index => this.sequence[index])
                )
                .subscribe(
                    (color: Color) => {
                        switch (color) {
                            case 'green':
                                this._blinkGreen.next(true);
                                break;
                            case 'red':
                                this._blinkRed.next(true);
                                break;
                            case 'yellow':
                                this._blinkYellow.next(true);
                                break;
                            case 'blue':
                                this._blinkBlue.next(true);
                                break;
                        }
                    },
                    () => {},
                    () => {
                        console.log('complete');
                    }
                );
        }
    }

    private _playSequence: Color[] = [];
    private get playSequence() {
        return this._playSequence;
    }
    private set playSequence(array: Color[]) {
        this._playSequence = array;
        if (this.playing && array.length) {
            console.log('sequence played', this.playSequence);
            const goodSoFar = this._playSequence.every(
                (playedColor, i) => this.sequence[i] === playedColor
            );
            if (!goodSoFar) {
                console.error('failed !');
                //handle error
                this.resetGame();
            } else {
                if (this.playSequence.length === this.sequence.length) {
                    this._nextRound.next(this.round + 1);
                }
            }
        }
    }

    @ViewChild('green') private green: ElementRef;
    @ViewChild('red') private red: ElementRef;
    @ViewChild('yellow') private yellow: ElementRef;
    @ViewChild('blue') private blue: ElementRef;

    public playing = false;
    public round = 0;
    public best = 0;

    constructor() {}

    ngOnInit() {
        this._howl = new Howl({
            src: ['./assets/simon-sound.mp3'],
            sprite: {
                green: [0, 295],
                red: [296, 297],
                yellow: [595, 271],
                blue: [866, 321],
            },
            onend: () => this._endPlay.next(),
            onload: () => {
                this._blinkGreen.pipe(throttleTime(500)).subscribe(() => {
                    this.blinkingColor = 'green';
                    this._howl.play(this.blinkingColor);
                    this.toggleBlinking(this.green);
                });
                this._blinkRed.pipe(throttleTime(500)).subscribe(() => {
                    this.blinkingColor = 'red';
                    this._howl.play(this.blinkingColor);
                    this.toggleBlinking(this.red);
                });
                this._blinkYellow.pipe(throttleTime(500)).subscribe(() => {
                    this.blinkingColor = 'yellow';
                    this._howl.play(this.blinkingColor);
                    this.toggleBlinking(this.yellow);
                });
                this._blinkBlue.pipe(throttleTime(500)).subscribe(() => {
                    this.blinkingColor = 'blue';
                    this._howl.play(this.blinkingColor);
                    this.toggleBlinking(this.blue);
                });
                this._endPlay.subscribe(() => {
                    switch (this.blinkingColor) {
                        case 'green':
                            this.toggleBlinking(this.green);
                            break;
                        case 'red':
                            this.toggleBlinking(this.red);
                            break;
                        case 'blue':
                            this.toggleBlinking(this.blue);
                            break;
                        case 'yellow':
                            this.toggleBlinking(this.yellow);
                            break;
                    }
                    this.blinkingColor = null;
                });
            },
            onloaderror: error => console.error(error),
        });
    }

    public clickGreen() {
        this._blinkGreen.next(true);
        this.playSequence = [...this.playSequence, 'green'];
    }

    public clickRed() {
        this._blinkRed.next(true);
        this.playSequence = [...this.playSequence, 'red'];
    }

    public clickYellow() {
        this._blinkYellow.next(true);
        this.playSequence = [...this.playSequence, 'yellow'];
    }

    public clickBlue() {
        this._blinkBlue.next(true);
        this.playSequence = [...this.playSequence, 'blue'];
    }

    private toggleBlinking(htmlElement: ElementRef) {
        htmlElement.nativeElement.classList.toggle('blinking');
    }

    public startGame() {
        this._nextRound = new Subject();
        this._nextRound.subscribe((level: number) => {
            this.playSequence = [];
            this.round = level;
            this.computeSequence();
        });
        this.playing = true;
        this._nextRound.next(1);
    }

    public resetGame() {
        this.playing = false;
        this._nextRound.unsubscribe();
        this.sequence = [];
        this.best = 0;
        this.playSequence = [];
        if (this.best < this.round) {
            this.best = this.round;
        }
        this.round = 0;
    }

    private computeSequence() {
        let newColor: Color;
        switch (Math.floor(Math.random() * Math.floor(4))) {
            case 0:
                newColor = 'green';
                break;
            case 1:
                newColor = 'red';
                break;
            case 2:
                newColor = 'yellow';
                break;
            case 3:
                newColor = 'blue';
                break;
        }
        console.log('newColor :', newColor);
        this.sequence = [...this._sequence, newColor];
    }
}
