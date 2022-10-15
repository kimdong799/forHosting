import { 
    Wave 
} from "./wave.js";

export class WaveGroup{
    constructor(){
        this.totalWaves = 3;
        this.totalPoints = 6;
        const colorGroup = [
            ['rgba(0,199,235,0.4)', 'rgba(0,146,199,0.4)', 'rgba(0,87,158,0.4)'],
            ['rgba(255,99,71,0.4)', 'rgba(249,62,67,0.4)', 'rgba(251,112,116,0.4)'],
            ['rgba(255,215,0,0.4)', 'rgba(255,165,0,0.4)', 'rgba(255,140,0,0.4)'],
            ['rgba(0,100,0,0.3)', 'rgba(0,128,0,0.3)', 'rgba(34,139,34,0.3)']
        ];
        const randInt = Math.floor(Math.random() * (colorGroup.length))
        this.color = colorGroup[randInt]

        this.waves = [];

        for(let i=0; i < this.totalWaves; i++){
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }
    resize(stageWidth, stageHeight){
        for(let i=0; i<this.totalWaves; i++){
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }
    draw(ctx){
        for(let i=0; i<this.totalWaves; i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}