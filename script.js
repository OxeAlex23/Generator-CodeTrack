const btnGerar = document.getElementById('btn-gerar');

btnGerar.addEventListener('click', () => {
 const result = document.getElementById('result');
    const lyrcs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const prefix = lyrcs[Math.floor(Math.random() * lyrcs.length)] + lyrcs[Math.floor(Math.random() * lyrcs.length)];
    const numbers = Math.floor(100000000 + Math.random() * 900000000);
    const sufix = lyrcs[Math.floor(Math.random() * lyrcs.length)] + lyrcs[Math.floor(Math.random() * lyrcs.length)];

    result.textContent = `${prefix}${numbers}${sufix}`
});
