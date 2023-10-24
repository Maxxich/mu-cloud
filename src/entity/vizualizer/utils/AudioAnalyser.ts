export class AudioAnalyser{
    initialized: boolean | undefined
    audioContext: AudioContext | undefined
    audioSource: MediaElementAudioSourceNode | undefined
    analyser: AnalyserNode | undefined
    bufferLength: number | undefined
    dataArray: Uint8Array | undefined

    static instance: AudioAnalyser | null = null

    constructor(fftSize: number, audio: any) {
        if (AudioAnalyser.instance) {
            return AudioAnalyser.instance
        }
        this.initialized = false
        try {
            AudioAnalyser.instance = this
            this.audioContext = new AudioContext()
            this.audioSource = this.audioContext.createMediaElementSource(audio)
            this.analyser = this.audioContext.createAnalyser()
            this.audioSource.connect(this.analyser)
            this.analyser.connect(this.audioContext.destination)
            this.analyser.fftSize = fftSize
            this.bufferLength= this.analyser.frequencyBinCount
            this.dataArray = new Uint8Array(this.bufferLength)
            this.initialized = true
        } catch (error) {
        }
    }

    getSamples(){
    this.analyser!.getByteTimeDomainData(this.dataArray!)
    let normalSamples = [...[].slice.call(this.dataArray)].map(e => e/128 - 1)
    return normalSamples
    }

    getVolume(){
    this.analyser!.getByteTimeDomainData(this.dataArray!)
    let normalSamples = [...[].slice.call(this.dataArray)]!.map(e => e/128 - 1)
    let sum = 0
    for (let i = 0; i < normalSamples.length; i++) {
        sum += normalSamples[i] * normalSamples[i]
    }
    let volume = Math.sqrt(sum / normalSamples.length)
    return volume
    }
}