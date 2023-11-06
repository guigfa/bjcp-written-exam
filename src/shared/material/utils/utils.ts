export function formatTimer(time: number): string {
    if(time > 1800) {
      const horas = Math.floor(time / 3600);
      const minutos = Math.floor((time % 3600) / 60);
      const segundos = (time % 60) < 10 ? `0${time % 60}`: time % 60;
      return `${horas}:${minutos}:${segundos}`
    }
    const minutos = Math.floor((time % 3600) / 60);
    const segundos = time % 60;
    return `${minutos}:${segundos}`
  }