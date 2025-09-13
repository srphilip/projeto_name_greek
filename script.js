// Base de dados de nomes com transliterações (mantida)
// OBS: As chaves originais têm acentos. Abaixo criamos um índice normalizado
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

/* ============================================
   UTILITÁRIOS DE NORMALIZAÇÃO
============================================ */
function normalizeName(name) {
    return name.toLowerCase()
        .normalize('NFD')               // separa acentos
        .replace(/[\u0300-\u036f]/g, '')// remove marcas de acento
        .replace(/ß/g, 'ss')
        .replace(/ñ/g, 'n')
        .trim();
}

// Índice normalizado para permitir busca com/sem acento
const normalizedDB = {};
for (const [key, value] of Object.entries(namesDatabase)) {
    normalizedDB[normalizeName(key)] = value;
}

/* ============================================
   OVERRIDES para latinização e grego Koiné
   (para nomes comuns que têm forma consagrada)
============================================ */
const latinOverrides = {
    // masculinos
    'joao': 'Ioannes',
    'jose': 'Iosephus',
    'pedro': 'Petrus',
    'paulo': 'Paulus',
    'marcos': 'Marcus',
    'lucas': 'Lucas',
    'andre': 'Andreas',
    'carlos': 'Carolus',
    'antonio': 'Antonius',
    'francisco': 'Franciscus',
    // femininos
    'maria': 'Maria',
    'ana': 'Anna',
    'helena': 'Helena',
    'sofia': 'Sophia',
    'catarina': 'Catharina',
    'beatriz': 'Beatrix',
    'clara': 'Clara',
    'julia': 'Iulia',
    'teresa': 'Theresia',
    'isabel': 'Isabella'
};

const greekOverrides = {
    'joao': 'Ἰωάννης',
    'jose': 'Ἰωσήφ',
    'pedro': 'Πέτρος',
    'paulo': 'Παῦλος',
    'marcos': 'Μάρκος',
    'lucas': 'Λουκᾶς',
    'andre': 'Ἀνδρέας',
    'carlos': 'Κάρολος',
    'antonio': 'Ἀντώνιος',
    'francisco': 'Φραγκίσκος',
    'maria': 'Μαρία',
    'ana': 'Ἄννα',
    'helena': 'Ἑλένη',
    'sofia': 'Σοφία',
    'catarina': 'Αἰκατερίνη',
    'beatriz': 'Βεατρίκη',
    'clara': 'Κλάρα',
    'julia': 'Ἰουλία',
    'teresa': 'Θηρεσία',
    'isabel': 'Ἰσαβέλλα'
};

/* ============================================
   TRANSLITERAÇÃO PARA LATIM CLÁSSICO
   - Remove J (→ I), W (→ V), Y (→ I)
   - K (→ C), Ç (→ C)
   - NH (→ NI), LH (→ LI)
   - Mantém PH/TH/CH/QU quando existirem
   - Não força terminação -us (evita erros)
============================================ */
function capitalizeWord(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function transliterateToLatinClassical(input) {
    const src = normalizeName(input);

    // Override consagrados
    if (latinOverrides[src]) {
        return latinOverrides[src];
    }

    let s = src;

    // Digramas portugueses
    s = s.replace(/nh/g, 'ni');
    s = s.replace(/lh/g, 'li');

    // Ortografia latina
    s = s.replace(/ç/g, 'c');
    s = s.replace(/j/g, 'i');
    s = s.replace(/y/g, 'i');
    s = s.replace(/w/g, 'v');
    s = s.replace(/k/g, 'c');

    // Mantém ch/ph/th/qu como já estiverem
    // (se aparecerem em maiúsculas no original, a capitalização final resolve)

    // Limpeza final (apenas letras, espaços e hífens)
    s = s.replace(/[^a-z\s\-']/g, '');

    // Capitaliza cada palavra
    s = s.split(/\s+/).map(capitalizeWord).join(' ');

    return s;
}

/* ============================================
   TRANSLITERAÇÃO PARA GREGO KOINÉ (monotônico)
   - Trata dígrafos: ch→χ, ph→φ, th→θ, ps→ψ, qu→κου, nh→νι, lh→λι
   - Ditongos: ai→αι, ei→ει, oi→οι, ou→ου, au→αυ, eu→ευ
   - C antes de e/i → σ; caso contrário → κ
   - H isolado é silencioso (removido) após tratar dígrafos
   - Sigma final (σ → ς no fim de palavra)
============================================ */
function toTitleCaseGreek(str) {
    return str.split(/\s+/).map(w => w ? w.charAt(0).toUpperCase() + w.slice(1) : w).join(' ');
}

function applyFinalSigma(s) {
    // σ no fim de cada palavra vira ς
    return s.replace(/σ(?=($|[\s\-]))/g, 'ς');
}

function transliterateToGreekKoine(input) {
    const key = normalizeName(input);

    // Overrides consagrados (com diacríticos quando apropriado)
    if (greekOverrides[key]) {
        return greekOverrides[key];
    }

    let s = key;

    // Ditongos (protege primeiro para não separar depois)
    s = s.replace(/ou/g, '§OU§')
         .replace(/ai/g, '§AI§')
         .replace(/ei/g, '§EI§')
         .replace(/oi/g, '§OI§')
         .replace(/au/g, '§AU§')
         .replace(/eu/g, '§EU§');

    // Dígrafos específicos
    s = s.replace(/nh/g, '§NH§')
         .replace(/lh/g, '§LH§')
         .replace(/ch/g, '§CH§')
         .replace(/ph/g, '§PH§')
         .replace(/th/g, '§TH§')
         .replace(/ps/g, '§PS§')
         .replace(/qu/g, '§QU§');

    // Agora converte seções protegidas
    s = s
        .replace(/§OU§/g, 'ου')
        .replace(/§AI§/g, 'αι')
        .replace(/§EI§/g, 'ει')
        .replace(/§OI§/g, 'οι')
        .replace(/§AU§/g, 'αυ')
        .replace(/§EU§/g, 'ευ')
        .replace(/§NH§/g, 'νι')
        .replace(/§LH§/g, 'λι')
        .replace(/§CH§/g, 'χ')
        .replace(/§PH§/g, 'φ')
        .replace(/§TH§/g, 'θ')
        .replace(/§PS§/g, 'ψ')
        .replace(/§QU§/g, 'κου');

    // Ajuste de 'c' antes de e/i/y → σ; senão κ
    s = s.replace(/c(?=[eiy])/g, 'σ').replace(/c/g, 'κ');

    // Mapeamento básico de letras restantes
    const map = {
        'a':'α','b':'β','d':'δ','e':'ε','f':'φ','g':'γ',
        'h':'',   // h sozinho é mudo em koiné (depois de tratar ch/th/ph)
        'i':'ι','j':'ι','k':'κ','l':'λ','m':'μ','n':'ν',
        'o':'ο','p':'π','q':'κ','r':'ρ','s':'σ','t':'τ',
        'u':'ου','v':'β','w':'ου','x':'ξ','y':'υ','z':'ζ',
        '\'':'\'','-':'-',' ':' '
    };

    let out = '';
    for (const ch of s) {
        out += (map[ch] !== undefined) ? map[ch] : ch;
    }

    // Sigma final
    out = applyFinalSigma(out);

    // Capitalização de cada palavra
    out = toTitleCaseGreek(out);

    return out;
}

/* ============================================
   CONSTRUÇÃO DO OBJETO DE RESULTADO PADRÃO
============================================ */
function buildTransliterationResult(inputName) {
    const greek = transliterateToGreekKoine(inputName);
    const latin = transliterateToLatinClassical(inputName);

    // Pronúncias aproximadas simples (opcional e didática)
    const greekPron = "Pronúncia aproximada";
    const latinPron = "Pronúncia aproximada";

    return {
        greek,
        latin,
        pronunciation: {
            greek: greekPron,
            latin: latinPron
        },
        meaning: "Nome moderno adaptado",
        origin: "Transliteração fonética (grego koiné e latim clássico)"
    };
}

/* ============================================
   BUSCA E EXIBIÇÃO
============================================ */
// Variáveis globais
let currentScreen = 'welcome';
let isFullscreen = false;
let currentNameData = null;
let currentOriginalName = '';

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

function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        setTimeout(() => {
            targetScreen.classList.add('active');
        }, 100);
    }

    currentScreen = screenId;
}

// Função principal de transliteração (atualizada)
function transliterateName(name) {
    return buildTransliterationResult(name);
}

function searchName(inputName) {
    const normalizedInput = normalizeName(inputName);

    // Primeiro tenta encontrar na base normalizada (aceita com/sem acento)
    if (normalizedDB[normalizedInput]) {
        return normalizedDB[normalizedInput];
    }

    // Se não encontrar, translitera corretamente (grego koiné e latim clássico)
    return transliterateName(inputName);
}

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

function showLoading(callback) {
    showScreen('loading-screen');
    setTimeout(() => {
        callback();
    }, 2000);
}

function hearPronunciation() {
    if (!currentNameData || !currentOriginalName) {
        alert('Nenhum nome foi encontrado para pronunciar!');
        return;
    }

    if ('speechSynthesis' in window) {
        const greekUtterance = new SpeechSynthesisUtterance(currentNameData.pronunciation.greek);
        greekUtterance.lang = 'el-GR';
        greekUtterance.rate = 0.7;
        greekUtterance.pitch = 1;

        const latinUtterance = new SpeechSynthesisUtterance(currentNameData.pronunciation.latin);
        latinUtterance.lang = 'la';
        latinUtterance.rate = 0.7;
        latinUtterance.pitch = 1;

        speechSynthesis.speak(greekUtterance);

        greekUtterance.onend = function() {
            setTimeout(() => {
                speechSynthesis.speak(latinUtterance);
            }, 500);
        };

        const btn = document.getElementById('hear-pronunciation');
        if (btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '🔊 Falando...';
            btn.disabled = true;

            latinUtterance.onend = function() {
                btn.innerHTML = originalText;
                btn.disabled = false;
            };
        }
    } else {
        alert('Seu navegador não suporta síntese de fala. Tente usar um navegador mais recente!');
    }
}

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
            <p>🏛️ Academia de Estudos Históricos 🏺</p>
            <p>Data: ${currentDate}</p>
        </div>
    `;

    const certificateArea = document.getElementById('certificate-area');
    certificateArea.style.display = 'block';

    setTimeout(() => {
        window.print();
        certificateArea.style.display = 'none';
    }, 500);
}

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

function clearInput() {
    const nameInput = document.getElementById('player-name');
    nameInput.value = '';
    nameInput.focus();
}

/* ============================================
   EVENTOS
============================================ */
document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-game');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            enterFullscreen();
            showScreen('search-screen');
            setTimeout(() => {
                const nameInput = document.getElementById('player-name');
                if (nameInput) nameInput.focus();
            }, 600);
        });
    }

    const searchBtn = document.getElementById('search-name');
    if (searchBtn) {
        searchBtn.addEventListener('click', handleNameSearch);
    }

    const nameInput = document.getElementById('player-name');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleNameSearch();
        });
        nameInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s\-']/g, '');
        });
    }

    const backToWelcomeBtn = document.getElementById('back-to-welcome');
    if (backToWelcomeBtn) {
        backToWelcomeBtn.addEventListener('click', function() {
            clearInput();
            showScreen('welcome-screen');
        });
    }

    const tryAgainBtn = document.getElementById('try-again');
    if (tryAgainBtn) {
        tryAgainBtn.addEventListener('click', function() {
            clearInput();
            showScreen('search-screen');
            setTimeout(() => {
                const nameInput = document.getElementById('player-name');
                if (nameInput) nameInput.focus();
            }, 600);
        });
    }

    const backToStartBtn = document.getElementById('back-to-start');
    if (backToStartBtn) {
        backToStartBtn.addEventListener('click', function() {
            clearInput();
            currentNameData = null;
            currentOriginalName = '';
            showScreen('welcome-screen');
        });
    }

    const hearPronunciationBtn = document.getElementById('hear-pronunciation');
    if (hearPronunciationBtn) {
        hearPronunciationBtn.addEventListener('click', hearPronunciation);
    }

    const generateCertificateBtn = document.getElementById('generate-certificate');
    if (generateCertificateBtn) {
        generateCertificateBtn.addEventListener('click', generateCertificate);
    }

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

/* ============================================
   API para expansão futura
============================================ */
function addNameToDatabase(name, data) {
    const normalizedName = normalizeName(name);
    namesDatabase[name] = data;           // mantém original
    normalizedDB[normalizedName] = data;  // atualiza índice normalizado
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        searchName,
        transliterateName,           // agora usa gregokoine + latim clássico
        transliterateToGreekKoine,
        transliterateToLatinClassical,
        addNameToDatabase,
        namesDatabase
    };
}