// Base de dados de nomes com transliterações
const namesDatabase = {
    // Nomes masculinos
    "joão": {
        greek: "Ἰωάννης",
        latin: "Ioannes",
        pronunciation: {
            greek: "ee-oh-AH-nees",
            latin: "ee-oh-AH-nes"
        },
        meaning: "Deus é gracioso",
        origin: "Hebraico"
    },
    "pedro": {
        greek: "Πέτρος",
        latin: "Petrus",
        pronunciation: {
            greek: "PEH-tros",
            latin: "PEH-trus"
        },
        meaning: "Pedra, rocha",
        origin: "Grego"
    },
    "paulo": {
        greek: "Παῦλος",
        latin: "Paulus",
        pronunciation: {
            greek: "PAW-los",
            latin: "PAW-lus"
        },
        meaning: "Pequeno, humilde",
        origin: "Latino"
    },
    "marcos": {
        greek: "Μάρκος",
        latin: "Marcus",
        pronunciation: {
            greek: "MAR-kos",
            latin: "MAR-kus"
        },
        meaning: "Guerreiro, dedicado a Marte",
        origin: "Latino"
    },
    "lucas": {
        greek: "Λουκᾶς",
        latin: "Lucas",
        pronunciation: {
            greek: "loo-KAS",
            latin: "LOO-kas"
        },
        meaning: "Luminoso, da Lucânia",
        origin: "Grego/Latino"
    },
    "andré": {
        greek: "Ἀνδρέας",
        latin: "Andreas",
        pronunciation: {
            greek: "an-DREH-as",
            latin: "an-DREH-as"
        },
        meaning: "Viril, corajoso",
        origin: "Grego"
    },
    "carlos": {
        greek: "Κάρολος",
        latin: "Carolus",
        pronunciation: {
            greek: "KAR-oh-los",
            latin: "KAR-oh-lus"
        },
        meaning: "Homem livre",
        origin: "Germânico"
    },
    "josé": {
        greek: "Ἰωσήφ",
        latin: "Iosephus",
        pronunciation: {
            greek: "ee-oh-SAYF",
            latin: "ee-oh-SEH-fus"
        },
        meaning: "Deus acrescenta",
        origin: "Hebraico"
    },
    "antonio": {
        greek: "Ἀντώνιος",
        latin: "Antonius",
        pronunciation: {
            greek: "an-TOH-nee-os",
            latin: "an-TOH-nee-us"
        },
        meaning: "Inestimável, valioso",
        origin: "Latino"
    },
    "francisco": {
        greek: "Φραγκίσκος",
        latin: "Franciscus",
        pronunciation: {
            greek: "fran-KEES-kos",
            latin: "fran-KEES-kus"
        },
        meaning: "Francês, livre",
        origin: "Germânico"
    },

    // Nomes femininos
    "maria": {
        greek: "Μαρία",
        latin: "Maria",
        pronunciation: {
            greek: "ma-REE-ah",
            latin: "ma-REE-ah"
        },
        meaning: "Senhora soberana",
        origin: "Hebraico"
    },
    "ana": {
        greek: "Ἄννα",
        latin: "Anna",
        pronunciation: {
            greek: "AH-na",
            latin: "AH-na"
        },
        meaning: "Graciosa, cheia de graça",
        origin: "Hebraico"
    },
    "helena": {
        greek: "Ἑλένη",
        latin: "Helena",
        pronunciation: {
            greek: "heh-LEH-nay",
            latin: "heh-LEH-na"
        },
        meaning: "Tocha, luz brilhante",
        origin: "Grego"
    },
    "sofia": {
        greek: "Σοφία",
        latin: "Sophia",
        pronunciation: {
            greek: "so-FEE-ah",
            latin: "so-FEE-ah"
        },
        meaning: "Sabedoria",
        origin: "Grego"
    },
    "catarina": {
        greek: "Αἰκατερίνη",
        latin: "Catharina",
        pronunciation: {
            greek: "ay-ka-teh-REE-nay",
            latin: "ka-ta-REE-na"
        },
        meaning: "Pura",
        origin: "Grego"
    },
    "beatriz": {
        greek: "Βεατρίκη",
        latin: "Beatrix",
        pronunciation: {
            greek: "veh-ah-TREE-kay",
            latin: "beh-AH-triks"
        },
        meaning: "Aquela que traz felicidade",
        origin: "Latino"
    },
    "clara": {
        greek: "Κλάρα",
        latin: "Clara",
        pronunciation: {
            greek: "KLAH-ra",
            latin: "KLAH-ra"
        },
        meaning: "Brilhante, ilustre",
        origin: "Latino"
    },
    "julia": {
        greek: "Ἰουλία",
        latin: "Iulia",
        pronunciation: {
            greek: "ee-oo-LEE-ah",
            latin: "YOO-lee-ah"
        },
        meaning: "Jovem, da família de Júlio",
        origin: "Latino"
    },
    "teresa": {
        greek: "Θηρεσία",
        latin: "Theresia",
        pronunciation: {
            greek: "thee-reh-SEE-ah",
            latin: "teh-REH-see-ah"
        },
        meaning: "Caçadora",
        origin: "Grego"
    },
    "isabel": {
        greek: "Ἰσαβέλλα",
        latin: "Isabella",
        pronunciation: {
            greek: "ee-sa-VEH-la",
            latin: "ee-sa-BEH-la"
        },
        meaning: "Consagrada a Deus",
        origin: "Hebraico"
    }
};

// Regras de transliteração para nomes não encontrados
const transliterationRules = {
    // Vogais
    'a': { greek: 'α', latin: 'a' },
    'e': { greek: 'ε', latin: 'e' },
    'i': { greek: 'ι', latin: 'i' },
    'o': { greek: 'ο', latin: 'o' },
    'u': { greek: 'υ', latin: 'u' },

    // Consoantes
    'b': { greek: 'β', latin: 'b' },
    'c': { greek: 'κ', latin: 'c' },
    'd': { greek: 'δ', latin: 'd' },
    'f': { greek: 'φ', latin: 'f' },
    'g': { greek: 'γ', latin: 'g' },
    'h': { greek: 'χ', latin: 'h' },
    'j': { greek: 'ι', latin: 'i' },
    'k': { greek: 'κ', latin: 'c' },
    'l': { greek: 'λ', latin: 'l' },
    'm': { greek: 'μ', latin: 'm' },
    'n': { greek: 'ν', latin: 'n' },
    'p': { greek: 'π', latin: 'p' },
    'q': { greek: 'κ', latin: 'qu' },
    'r': { greek: 'ρ', latin: 'r' },
    's': { greek: 'σ', latin: 's' },
    't': { greek: 'τ', latin: 't' },
    'v': { greek: 'β', latin: 'v' },
    'w': { greek: 'ω', latin: 'v' },
    'x': { greek: 'ξ', latin: 'x' },
    'y': { greek: 'υ', latin: 'y' },
    'z': { greek: 'ζ', latin: 'z' }
};

// Variáveis globais
let currentScreen = 'welcome';
let isFullscreen = false;
let currentNameData = null;
let currentOriginalName = '';

// Função para entrar em tela cheia
function enterFullscreen() {
    if (!isFullscreen) {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        isFullscreen = true;
    }
}

// Função para mostrar uma tela específica
function showScreen(screenId) {
    // Esconder todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // Mostrar a tela solicitada
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        setTimeout(() => {
            targetScreen.classList.add('active');
        }, 100);
    }

    currentScreen = screenId;
}

// Função para normalizar nome (remover acentos e converter para minúsculas)
function normalizeName(name) {
    return name.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
}

// Função para transliterar nome usando regras básicas
function transliterateName(name) {
    const normalizedName = normalizeName(name);
    let greekResult = '';
    let latinResult = '';

    for (let char of normalizedName) {
        if (transliterationRules[char]) {
            greekResult += transliterationRules[char].greek;
            latinResult += transliterationRules[char].latin;
        } else {
            greekResult += char;
            latinResult += char;
        }
    }

    // Capitalizar primeira letra
    greekResult = greekResult.charAt(0).toUpperCase() + greekResult.slice(1);
    latinResult = latinResult.charAt(0).toUpperCase() + latinResult.slice(1);

    return {
        greek: greekResult,
        latin: latinResult,
        pronunciation: {
            greek: "Pronúncia aproximada",
            latin: "Pronúncia aproximada"
        },
        meaning: "Nome único e especial",
        origin: "Transliteração moderna"
    };
}

// Função para buscar nome na base de dados
function searchName(inputName) {
    const normalizedInput = normalizeName(inputName);

    // Buscar nome exato na base de dados
    if (namesDatabase[normalizedInput]) {
        return namesDatabase[normalizedInput];
    }

    // Se não encontrar, usar transliteração
    return transliterateName(inputName);
}

// Função para exibir resultado
function displayResult(nameData, originalName) {
    const resultContent = document.getElementById('result-content');

    resultContent.innerHTML = `
        <div class="name-result">
            <h3>Nome Original: <strong>${originalName}</strong></h3>
        </div>

        <div class="name-result">
            <div class="ancient-name">🏛️ Grego Antigo (Koiné)</div>
            <div class="ancient-name">${nameData.greek}</div>
            <div class="pronunciation">Pronúncia: ${nameData.pronunciation.greek}</div>
        </div>

        <div class="name-result">
            <div class="ancient-name">🏺 Latim Clássico</div>
            <div class="ancient-name">${nameData.latin}</div>
            <div class="pronunciation">Pronúncia: ${nameData.pronunciation.latin}</div>
        </div>

        <div class="name-result">
            <div class="meaning">
                <strong>📜 Significado:</strong> ${nameData.meaning}<br>
                <strong>🌍 Origem:</strong> ${nameData.origin}
            </div>
        </div>
    `;
}

// Função para simular carregamento
function showLoading(callback) {
    showScreen('loading-screen');

    // Simular tempo de carregamento
    setTimeout(() => {
        callback();
    }, 2000);
}

// Função para ouvir pronúncia
function hearPronunciation() {
    if (!currentNameData || !currentOriginalName) {
        alert('Nenhum nome foi encontrado para pronunciar!');
        return;
    }

    // Verificar se o navegador suporta síntese de fala
    if ('speechSynthesis' in window) {
        // Pronunciar o nome grego
        const greekUtterance = new SpeechSynthesisUtterance(currentNameData.pronunciation.greek);
        greekUtterance.lang = 'el-GR'; // Grego
        greekUtterance.rate = 0.7;
        greekUtterance.pitch = 1;

        // Pronunciar o nome latino
        const latinUtterance = new SpeechSynthesisUtterance(currentNameData.pronunciation.latin);
        latinUtterance.lang = 'la'; // Latim (pode não estar disponível em todos os navegadores)
        latinUtterance.rate = 0.7;
        latinUtterance.pitch = 1;

        // Falar primeiro o grego, depois o latino
        speechSynthesis.speak(greekUtterance);

        greekUtterance.onend = function() {
            setTimeout(() => {
                speechSynthesis.speak(latinUtterance);
            }, 500);
        };

        // Mostrar feedback visual
        const btn = document.getElementById('hear-pronunciation');
        const originalText = btn.innerHTML;
        btn.innerHTML = '🔊 Falando...';
        btn.disabled = true;

        latinUtterance.onend = function() {
            btn.innerHTML = originalText;
            btn.disabled = false;
        };
    } else {
        alert('Seu navegador não suporta síntese de fala. Tente usar um navegador mais recente!');
    }
}

// Função para gerar certificado
function generateCertificate() {
    if (!currentNameData || !currentOriginalName) {
        alert('Nenhum nome foi encontrado para gerar certificado!');
        return;
    }

    const certificateContent = document.getElementById('certificate-content');
    const currentDate = new Date().toLocaleDateString('pt-BR');

    certificateContent.innerHTML = `
        <div class="certificate-title">🏛️ CERTIFICADO DE DESCOBERTA HISTÓRICA 🏺</div>

        <div class="certificate-content">
            <p>Certificamos que <strong>${currentOriginalName}</strong> realizou uma incrível jornada no tempo e descobriu como seu nome era escrito na antiguidade!</p>

            <div class="certificate-names">
                <p><strong>🏛️ Em Grego Antigo (Koiné):</strong><br>
                <span style="font-size: 1.5em; color: #8b4513;">${currentNameData.greek}</span><br>
                <em>Pronúncia: ${currentNameData.pronunciation.greek}</em></p>

                <p><strong>🏺 Em Latim Clássico:</strong><br>
                <span style="font-size: 1.5em; color: #8b4513;">${currentNameData.latin}</span><br>
                <em>Pronúncia: ${currentNameData.pronunciation.latin}</em></p>

                <p><strong>📜 Significado:</strong> ${currentNameData.meaning}</p>
                <p><strong>🌍 Origem:</strong> ${currentNameData.origin}</p>
            </div>

            <p>Parabéns por esta descoberta histórica!</p>
        </div>

        <div class="certificate-signature">
            <p>🏛️ Academia de Estudos Históricos do SESI-CILF (2º Período C)🏺</p>
            <p>Data: ${currentDate}</p>
        </div>
    `;

    // Mostrar e imprimir o certificado
    const certificateArea = document.getElementById('certificate-area');
    certificateArea.style.display = 'block';

    setTimeout(() => {
        window.print();
        certificateArea.style.display = 'none';
    }, 500);
}

// Função principal de busca
function handleNameSearch() {
    const nameInput = document.getElementById('player-name');
    const inputName = nameInput.value.trim();

    if (!inputName) {
        alert('Por favor, digite um nome!');
        return;
    }

    if (inputName.length < 2) {
        alert('Por favor, digite um nome com pelo menos 2 letras!');
        return;
    }

    showLoading(() => {
        const nameData = searchName(inputName);
        currentNameData = nameData;
        currentOriginalName = inputName;
        displayResult(nameData, inputName);
        showScreen('result-screen');
    });
}

// Função para limpar campo de entrada
function clearInput() {
    const nameInput = document.getElementById('player-name');
    nameInput.value = '';
    nameInput.focus();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Botão iniciar jogo
    const startBtn = document.getElementById('start-game');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            enterFullscreen();
            showScreen('search-screen');

            // Focar no campo de entrada após um pequeno delay
            setTimeout(() => {
                const nameInput = document.getElementById('player-name');
                if (nameInput) {
                    nameInput.focus();
                }
            }, 600);
        });
    }

    // Botão buscar nome
    const searchBtn = document.getElementById('search-name');
    if (searchBtn) {
        searchBtn.addEventListener('click', handleNameSearch);
    }

    // Campo de entrada - buscar ao pressionar Enter
    const nameInput = document.getElementById('player-name');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleNameSearch();
            }
        });

        // Limitar caracteres especiais
        nameInput.addEventListener('input', function(e) {
            // Permitir apenas letras, espaços e alguns caracteres especiais
            this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s\-']/g, '');
        });
    }

    // Botão voltar da tela de busca
    const backToWelcomeBtn = document.getElementById('back-to-welcome');
    if (backToWelcomeBtn) {
        backToWelcomeBtn.addEventListener('click', function() {
            clearInput();
            showScreen('welcome-screen');
        });
    }

    // Botão tentar outro nome
    const tryAgainBtn = document.getElementById('try-again');
    if (tryAgainBtn) {
        tryAgainBtn.addEventListener('click', function() {
            clearInput();
            showScreen('search-screen');
            setTimeout(() => {
                const nameInput = document.getElementById('player-name');
                if (nameInput) {
                    nameInput.focus();
                }
            }, 600);
        });
    }

    // Botão voltar ao início
    const backToStartBtn = document.getElementById('back-to-start');
    if (backToStartBtn) {
        backToStartBtn.addEventListener('click', function() {
            clearInput();
            currentNameData = null;
            currentOriginalName = '';
            showScreen('welcome-screen');
        });
    }

    // Botão ouvir pronúncia
    const hearPronunciationBtn = document.getElementById('hear-pronunciation');
    if (hearPronunciationBtn) {
        hearPronunciationBtn.addEventListener('click', hearPronunciation);
    }

    // Botão gerar certificado
    const generateCertificateBtn = document.getElementById('generate-certificate');
    if (generateCertificateBtn) {
        generateCertificateBtn.addEventListener('click', generateCertificate);
    }

    // Detectar saída do modo fullscreen
    document.addEventListener('fullscreenchange', function() {
        isFullscreen = !!document.fullscreenElement;
    });

    document.addEventListener('webkitfullscreenchange', function() {
        isFullscreen = !!document.webkitFullscreenElement;
    });

    document.addEventListener('mozfullscreenchange', function() {
        isFullscreen = !!document.mozFullScreenElement;
    });

    document.addEventListener('MSFullscreenChange', function() {
        isFullscreen = !!document.msFullscreenElement;
    });
});

// Função para adicionar novos nomes à base de dados (para expansão futura)
function addNameToDatabase(name, data) {
    const normalizedName = normalizeName(name);
    namesDatabase[normalizedName] = data;
}

// Exportar funções para uso externo (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        searchName,
        transliterateName,
        addNameToDatabase,
        namesDatabase
    };
}