export function formatTimer(time: number): string {
    const minutos = Math.floor((time % 3600) / 60);
    const segundos = time % 60;
    return `${minutos}:${segundos}`
  }