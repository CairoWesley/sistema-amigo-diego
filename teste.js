


const texto = `empresa de loca&ccedil;&atilde;o de impressora e servi&ccedil;os nessa area&nbsp;<br />
https://www.linkedin.com/in/paula-castro-4936b2193/?originalSubdomain=br<br />
<br />
tem pessoa em vendas mas n&atilde;o tem time ativo&nbsp;<br />
e est&aacute; fraco a prospec&ccedil;&atilde;o&nbsp;<br />
<br />
tem desafio em contratar&nbsp;<br />
e agora ela vai come&ccedil;ara qualificar internamente - vai contratar junior para ajudar&nbsp;<br />
e precisa ter esse processo ajustado, ela j&aacute; tem um processo montado&nbsp;<br />
tem uma consultora ajudando ela de 15 em 15 diuas&nbsp;<br />
<br />
fatu&nbsp;<br />
90k mes&nbsp;<br />
<br />
lead para imers&atilde;o - busca treinamentos pq j&aacute; tem uma consultora ajudando ela de 15 em 15 dias.<br />
<br />
ela j&aacute; acompanha o thiago e entrou em contato buscando treinamento para melhorar o ocmercial - saber as melhores pr&aacute;ticas.&nbsp;
`
function extrairTexto(html) {
    // Remove tags HTML e espaços extras
    return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().replace(/&nbsp;/g, "\n").replace(/&[a-z]+;/gi, (entity) => {
        const entities = {
            '&lt;': '<',
            '&gt;': '>',
            '&amp;': '&',
            '&quot;': '"',
            '&apos;': "'",
            '&Aacute;': 'Á',
            '&aacute;': 'á',
            '&Eacute;': 'É',
            '&eacute;': 'é',
            '&Iacute;': 'Í',
            '&iacute;': 'í',
            '&Oacute;': 'Ó',
            '&oacute;': 'ó',
            '&Uacute;': 'Ú',
            '&uacute;': 'ú',
            '&Ccedil;': 'Ç',
            '&ccedil;': 'ç',
            '&atilde;': 'ã',
            '&ecirc;': 'ê',
            '&otilde;': 'õ',
            '&ccedil;': 'ç',
  '&nbsp;': '\n',
        };
        return entities[entity] || entity;
    })
}

// Chama a função e exibe o resultado no console
const textoConvertido = extrairTexto(texto);

console.log(textoConvertido)
// output = [{textoConvertido}]