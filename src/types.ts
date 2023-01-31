import { Ref } from 'vue'

export interface Options {
    container_id: string
}

export interface ReturnedObject {
    container: Ref<string>
    tradingview: Ref<HTMLDivElement | undefined>
}
