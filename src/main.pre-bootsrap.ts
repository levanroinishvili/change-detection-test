import { BootstrapOptions, NgZone } from "@angular/core"

const BootstrapingOptions = {
    standalone: 'Standalone with Zone.js',
    ngmoduleZone: 'NgModule with Zone.js',
    ngmoduleNoZone: 'NgModule without Zone.js',
} as const satisfies Record<string, string>

type BoostrapMode = 'standalone' | 'NgModule'
type NgZoneChoice = Exclude<BootstrapOptions['ngZone'], NgZone | undefined>
export type BootstrapFn = (bootstrapMode: BoostrapMode, ngZone: NgZoneChoice) => void

export function createModeSelector(callback: (bootstrapMode: BoostrapMode, ngZone: NgZoneChoice) => void) {
    function onUserChoice() {
        const selector = document.getElementById('bootstrap-mode-selector') as HTMLSelectElement
        const userChoice = selector.value as keyof typeof BootstrapingOptions
        switch (userChoice) {
            case 'standalone': callback('standalone', 'zone.js'); break
            case 'ngmoduleZone': callback('NgModule', 'zone.js'); break
            case 'ngmoduleNoZone': callback('NgModule', 'noop'); break;
            default: throw new Error('User choice not recognized')
        }
        container.remove()
    }
    const container = document.createElement('DIV')
    window.addEventListener('load', () => {
        const elements = [
            createSelector(BootstrapingOptions, 'bootstrap-mode-selector' ),
            createButton('Bootstrap', onUserChoice)
        ]
        elements.forEach(element => container.append(element))
        document.body.insertBefore(container, document.body.firstChild)
    })
}

function createSelector(options: Record<string, string>, id: string) {
    const bootstrapModeSelector = document.createElement('SELECT') as HTMLSelectElement
    bootstrapModeSelector.setAttribute('id', id)
    bootstrapModeSelector.innerHTML = Object.entries(options)
        .map(([value, label]) => `<option value="${value}">${label}</option>`)
        .join('\n')
    return bootstrapModeSelector
}

function createButton(label: string, listener: () => unknown) {
    const button = document.createElement('BUTTON')
    button.innerText = label
    button.addEventListener('click', listener)
    return button
}
