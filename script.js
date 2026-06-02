// 30 perguntas de nível superior sobre Biossegurança, NR-32, Resíduos, Medicamentos e Combate a incêndio
const perguntas = [
    { texto: "De acordo com a Lei nº 11.105/2005 (Lei de Biossegurança), qual é a principal função da CTNBio?", alternativas: ["Fiscalizar hospitais e laboratórios quanto à infecção hospitalar", "Avaliar tecnicamente a segurança de atividades com OGMs, emitir pareceres e normas", "Gerir a política nacional de recursos hídricos", "Regular preços de medicamentos e insumos biológicos"], correta: 1 },
    { texto: "A NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) é de observância obrigatória e tem como objetivo principal:", alternativas: ["Estabelecer diretrizes para a segurança e saúde dos trabalhadores de serviços de saúde", "Regulamentar o uso de equipamentos de informática em hospitais", "Definir normas para a construção civil de unidades de saúde", "Estabelecer a jornada de trabalho máxima para enfermeiros"], correta: 0 },
    { texto: "Um laboratório recebe uma amostra de tecido cerebral com suspeita de contaminação por príons (Doença de Creutzfeldt-Jakob). Pela RDC 222/2018, como este resíduo (Grupo A, subgrupo A5) deve ser acondicionado?", alternativas: ["Em saco branco leitoso, comum", "Em caixa de papelão identificada", "Em dois sacos vermelhos sobrepostos, obrigatoriamente", "Em recipiente rígido perfurocortante"], correta: 2 },
    { texto: "Qual dos seguintes resíduos é classificado como Grupo E (Perfurocortantes) e exige descarte em recipiente rígido, resistente à punctura?", alternativas: ["Bolsas de sangue vencidas", "Agulhas, lâminas de bisturi e ampolas de vidro", "Restos de comida da copa", "Medicamentos vencidos"], correta: 1 },
    { texto: "O Mapa de Risco, conforme a NR-5, utiliza cores para identificar os diferentes tipos de risco. A cor que representa o Risco Químico é:", alternativas: ["Verde", "Vermelho", "Amarelo", "Azul"], correta: 2 },
    { texto: "Durante uma crise convulsiva (epiléptica) em ambiente laboratorial, qual conduta é contraindicada e potencialmente perigosa?", alternativas: ["Afastar objetos perfurocortantes do paciente", "Colocar algo macio sob a cabeça", "Introduzir objetos (como uma colher) na boca para evitar morder a língua", "Colocar o paciente em posição lateral de segurança após a crise"], correta: 2 },
    { texto: "Qual agente biológico é classificado na Classe de Risco 3 (Alto Risco), causando doença grave e com possibilidade de transmissão, porém existem medidas de controle?", alternativas: ["Escherichia coli K-12 (laboratório)", "Mycobacterium tuberculosis (tuberculose)", "Saccharomyces cerevisiae (levedura)", "Lactobacillus casei"], correta: 1 },
    { texto: "Os resíduos do subgrupo A3 (Peças Anatômicas Humanas) e A2 (Carcaças Animais) exigem destinação final especial devido à rápida putrefação. Qual destino é eticamente e sanitariamente aceito?", alternativas: ["Reciclagem comum", "Aterro sanitário comum", "Sepultamento, cremação ou incineração", "Compostagem"], correta: 2 },
    { texto: "Para incêndio classe C (equipamentos elétricos energizados), NUNCA se deve utilizar qual agente extintor devido ao risco de choque elétrico ou propagação?", alternativas: ["Pó químico seco (BC ou ABC)", "Gás Carbônico (CO₂)", "Água ou espuma", "Pó especial classe D"], correta: 2 },
    { texto: "Em caso de obstrução completa de vias aéreas por corpo estranho (engasgo) em uma pessoa consciente, a manobra padrão indicada é:", alternativas: ["Compressões torácicas (massagem cardíaca)", "Manobra de Heimlich (compressão abdominal)", "Respiração boca a boca imediata", "Deitar a vítima e elevar as pernas"], correta: 1 },
    { texto: "Qual é a classificação correta do resíduo 'revelador de raio-X' e 'mercúrio de termômetro quebrado'? Possui risco à saúde por ser tóxico ou corrosivo.", alternativas: ["Grupo A (Infectante)", "Grupo B (Químico Perigoso)", "Grupo C (Radioativo)", "Grupo D (Comum)"], correta: 1 },
    { texto: "A cabine de segurança biológica (CSB) classe II é um equipamento de contenção fundamental. Em que situação seu uso é obrigatório?", alternativas: ["Para pesar medicamentos não tóxicos", "Para manipular agentes biológicos classe 2 e 3 que geram aerossóis", "Para guardar materiais de escritório", "Para aquecer soluções em chapa aquecedora"], correta: 1 },
    { texto: "De acordo com a classificação de risco biológico, qual alternativa contém um agente de Classe de Risco 4 (Risco Máximo)?", alternativas: ["Vírus HIV (se tratado)", "Vírus Ebola ou Marburg", "Bacillus subtilis", "Candida albicans"], correta: 1 },
    { texto: "A sigla CNBS, criada pela Lei 11.105/2005, refere-se ao órgão responsável por:", alternativas: ["Fiscalizar o comércio de sementes", "Formular a Política Nacional de Biossegurança e assessorar a presidência", "Controlar a produção de vacinas veterinárias", "Regular a exportação de minérios"], correta: 1 },
    { texto: "Qual comportamento é vedado (proibido) pelas boas práticas em laboratórios de biossegurança?", alternativas: ["Uso de jaleco de manga longa", "Pipetar substâncias com a boca", "Higienizar as mãos após procedimentos", "Descartar luvas no lixo infectante"], correta: 1 },
    { texto: "O Paracetamol, um medicamento isento de prescrição (MIP), apresenta um risco importante quando utilizado em superdosagem. Qual é ele?", alternativas: ["Insuficiência renal aguda", "Hepatotoxicidade grave (lesão hepática)", "Depressão respiratória", "Arritmia cardíaca fatal"], correta: 1 },
    { texto: "Qual método de propagação do fogo ocorre pelo movimento ascendente de gases quentes e ar aquecido, sendo a principal causa de propagação vertical em incêndios?", alternativas: ["Condução", "Convecção", "Irradiação", "Contato direto"], correta: 1 },
    { texto: "No conceito atualizado de combate a incêndios, o TRIÂNGULO DO FOGO foi substituído pelo TETRAEDRO DO FOGO. Qual é o QUARTO elemento adicionado ao tetraedro?", alternativas: ["Combustível", "Oxigênio", "Reação em Cadeia", "Calor"], correta: 2 },
    { texto: "Em caso de desmaio (síncope) no laboratório, a conduta inicial correta, após verificar segurança, é:", alternativas: ["Dar água e café para reanimar", "Elevar as pernas da vítima cerca de 30 cm e afrouxar roupas", "Sacudir a vítima vigorosamente", "Sentar a vítima imediatamente"], correta: 1 },
    { texto: "Os resíduos classificados como Grupo D (Resíduos Comuns) são aqueles que:", alternativas: ["Apresentam risco biológico", "São perfurocortantes", "Não apresentam risco biológico, químico ou radiológico, similar ao lixo domiciliar", "Contêm radionuclídeos"], correta: 2 },
    { texto: "A Norma Regulamentadora NR-32 estabelece que os trabalhadores de serviços de saúde devem ter acesso gratuito e treinamento para uso de:", alternativas: ["Equipamentos de Proteção Individual (EPIs)", "Equipamentos de informática", "Equipamentos de ginástica laboral", "Ferramentas de jardinagem"], correta: 0 },
    { texto: "A Política Nacional de Medicamentos (PNM) tem como um de seus principais pilares garantir à população acesso a medicamentos essenciais. Qual instrumento lista esses medicamentos no SUS?", alternativas: ["CPF (Código de Produtos Farmacêuticos)", "RENAME (Relação Nacional de Medicamentos Essenciais)", "CID (Classificação Internacional de Doenças)", "CNES (Cadastro Nacional de Estabelecimentos de Saúde)"], correta: 1 },
    { texto: "Em relação ao transporte manual de cargas e postura no trabalho, a NR-17 e a biossegurança classificam esses como riscos do tipo:", alternativas: ["Risco Químico", "Risco Físico (radiação)", "Risco Ergonômico", "Risco Biológico"], correta: 2 },
    { texto: "Qual é a conduta imediata diante de um pequeno derramamento de sangue (resíduo biológico) sobre a bancada do laboratório?", alternativas: ["Limpar com papel toalha seco e descartar no lixo comum", "Aplicar solução de hipoclorito de sódio (1%) e depois limpar, utilizando EPIs", "Ignorar e continuar o trabalho", "Usar as mãos nuas para conter o líquido"], correta: 1 },
    { texto: "A Lei de Biossegurança (11.105/2005) estabelece o princípio da precaução. Isso significa que:", alternativas: ["Na ausência de certeza científica, medidas devem ser tomadas para evitar danos ambientais ou à saúde", "Todo produto geneticamente modificado é automaticamente liberado", "Não é necessário avaliar riscos se o produto for nacional", "Somente empresas podem fazer pesquisa com OGMs"], correta: 0 },
    { texto: "Os resíduos do subgrupo A5 (Príons) requerem procedimento especial. Por que eles são tão perigosos?", alternativas: ["São radioativos", "São altamente inflamáveis", "São proteínas infecciosas resistentes aos métodos comuns de inativação (autoclave simples)", "São ácidos concentrados"], correta: 2 },
    { texto: "Para incêndio envolvendo líquidos inflamáveis como álcool e gasolina (Classe B), qual o método de extinção mais eficaz?", alternativas: ["Jogar água em abundância (resfriamento)", "Usar extintor de água pressurizada", "Usar extintor de espuma, CO₂ ou pó químico (abafamento/inibição)", "Abrir janelas para o fogo sair"], correta: 2 },
    { texto: "A manipulação de agentes biológicos da Classe de Risco 3 (ex: Bacillus anthracis) requer, além de EPI, que tipo de equipamento de contenção primário?", alternativas: ["Capela de exaustão química", "Cabine de Segurança Biológica (CSB) Classe II ou III", "Bancada comum com luva de raspa", "Chapa aquecedora"], correta: 1 },
    { texto: "Qual a principal diferença entre o Grupo B (Químico) e o Grupo C (Radioativo) na classificação de resíduos de saúde?", alternativas: ["O grupo B é sempre sólido e o C líquido", "O grupo C contém radionuclídeos, enquanto o B tem substâncias tóxicas/corrosivas/inflamáveis sem radiação", "O grupo B é reciclável e o C não", "Não há diferença"], correta: 1 },
    { texto: "No contexto de biossegurança, o que significa a sigla EPI e por que é essencial?", alternativas: ["Equipamento de Proteção Individual, como luvas, aventais e máscaras, que serve como barreira de proteção ao trabalhador", "Equipamento de Prevenção de Incêndios, como extintores", "Equipamento de Proteção Intelectual para dados", "Exame Padrão de Identificação"], correta: 0 },
    { texto: "Um laboratório recebe um lote de bolsas de sangue para descarte. Pela RDC 222, este material é classificado como Grupo A, subgrupo A1. Qual o procedimento obrigatório antes do descarte final?", alternativas: ["Descarte em lixo comum", "Incineração ou autoclavação (tratamento prévio)", "Reciclagem do plástico", "Enterro em solo"], correta: 1 }
];

let respostasUsuario = new Array(30).fill(null);
let acertosUsuario = new Array(30).fill(false);
let questoesRespondidas = new Array(30).fill(false);

function renderizarPerguntas() {
    const container = document.getElementById('container-perguntas');
    if (!container) return;
    container.innerHTML = '';
    
    perguntas.forEach((pergunta, idx) => {
        const card = document.createElement('div');
        card.className = 'pergunta-card';
        
        if (questoesRespondidas[idx]) {
            card.classList.add(acertosUsuario[idx] ? 'correta' : 'errada');
        }
        
        const titulo = document.createElement('div');
        titulo.className = 'pergunta-titulo';
        titulo.innerHTML = `<i class="fa fa-question-circle"></i> Questão ${idx + 1}`;
        
        const texto = document.createElement('div');
        texto.className = 'pergunta-texto';
        texto.textContent = pergunta.texto;
        
        const alternativasDiv = document.createElement('div');
        alternativasDiv.className = 'alternativas';
        
        pergunta.alternativas.forEach((alt, altIdx) => {
            const alternativaDiv = document.createElement('div');
            alternativaDiv.className = 'alternativa';
            
            const icone = document.createElement('span');
            icone.className = 'icone-opcao';
            icone.textContent = String.fromCharCode(65 + altIdx) + ')';
            
            const textoAlt = document.createTextNode(' ' + alt);
            
            alternativaDiv.appendChild(icone);
            alternativaDiv.appendChild(textoAlt);
            
            if (questoesRespondidas[idx]) {
                alternativaDiv.classList.add('desabilitado');
                if (altIdx === perguntas[idx].correta) {
                    alternativaDiv.classList.add('correta');
                }
                if (respostasUsuario[idx] === altIdx && altIdx !== perguntas[idx].correta) {
                    alternativaDiv.classList.add('errada');
                }
            }
            
            alternativaDiv.addEventListener('click', () => {
                if (!questoesRespondidas[idx]) {
                    const isCorreta = (altIdx === perguntas[idx].correta);
                    respostasUsuario[idx] = altIdx;
                    acertosUsuario[idx] = isCorreta;
                    questoesRespondidas[idx] = true;
                    renderizarPerguntas();
                    atualizarPontuacao();
                    verificarQuizCompleto();
                }
            });
            
            alternativasDiv.appendChild(alternativaDiv);
        });
        
        card.appendChild(titulo);
        card.appendChild(texto);
        card.appendChild(alternativasDiv);
        container.appendChild(card);
    });
}

function atualizarPontuacao() {
    const acertos = acertosUsuario.filter(a => a === true).length;
    const pontuacaoSpan = document.getElementById('pontuacao');
    if (pontuacaoSpan) pontuacaoSpan.textContent = `${acertos}`;
}

function verificarQuizCompleto() {
    const todasRespondidas = questoesRespondidas.every(r => r === true);
    if (todasRespondidas) {
        const acertos = acertosUsuario.filter(a => a === true).length;
        const percentual = (acertos / 30) * 100;
        
        let mensagem = '';
        let cor = '';
        
        if (percentual >= 70) {
            mensagem = `🎉 EXCELENTE! Você acertou ${acertos}/30 (${percentual.toFixed(1)}%). Domina o conteúdo para a prova de faculdade!`;
            cor = '#d5f4e6';
        } else if (percentual >= 50) {
            mensagem = `📚 BOM! Você acertou ${acertos}/30 (${percentual.toFixed(1)}%). Revise os tópicos de resíduos, NR-32, medicamentos e tetraedro do fogo, depois tente novamente.`;
            cor = '#fff3cd';
        } else {
            mensagem = `⚠️ ATENÇÃO: Você acertou ${acertos}/30 (${percentual.toFixed(1)}%). Estude o resumo com calma, foque nos grupos de resíduos, classes de risco, MIPs, tetraedro do fogo e propagação de incêndio, depois refaça o quiz.`;
            cor = '#fce4e4';
        }
        
        let resultadoDiv = document.getElementById('resultado-final');
        if (!resultadoDiv) {
            resultadoDiv = document.createElement('div');
            resultadoDiv.id = 'resultado-final';
            resultadoDiv.style.cssText = `
                background: ${cor};
                padding: 20px 25px;
                border-radius: 20px;
                margin-top: 25px;
                text-align: center;
                font-size: 1.15rem;
                font-weight: bold;
                color: #1c2833;
                border-left: 8px solid #2e7d32;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            `;
            const containerPerguntas = document.getElementById('container-perguntas');
            if(containerPerguntas) containerPerguntas.after(resultadoDiv);
        } else {
            resultadoDiv.style.background = cor;
        }
        resultadoDiv.innerHTML = `<i class="fa fa-check-circle-o"></i> ${mensagem}`;
        resultadoDiv.scrollIntoView({ behavior: 'smooth' });
    }
}

function reiniciarQuiz() {
    respostasUsuario = new Array(30).fill(null);
    acertosUsuario = new Array(30).fill(false);
    questoesRespondidas = new Array(30).fill(false);
    
    renderizarPerguntas();
    atualizarPontuacao();
    
    const resultadoDiv = document.getElementById('resultado-final');
    if (resultadoDiv) resultadoDiv.remove();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarPerguntas();
    atualizarPontuacao();
    
    const btnReiniciar = document.getElementById('botao-reiniciar');
    if (btnReiniciar) btnReiniciar.addEventListener('click', reiniciarQuiz);
});
