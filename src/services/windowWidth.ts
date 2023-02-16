export function onWindowSizeChange(event: UIEvent) {
    console.log((event.target as Window).screen)
}