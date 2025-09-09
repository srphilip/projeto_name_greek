/**
 * Jogo Educacional: Meu Nome na História
 * Permite que crianças descubram como seus nomes eram escritos em grego e latim antigos
 * Desenvolvido para crianças de 4-6 anos
 */

// Base de dados de nomes com transliterações
const nameDatabase = {
    // Nomes masculinos
    "joão": { greek: "Ἰωάννης", latin: "Ioannes", pronunciation: { greek: "ee-oh-AH-nees", latin: "ee-oh-AH-nes" } },
    "pedro": { greek: "Πέτρος", latin: "Petrus", pronunciation: { greek: "PEH-tros", latin: "PEH-trus" } },
    "lucas": { greek: "Λουκᾶς", latin: "Lucas", pronunciation: { greek: "loo-KAHS", latin: "LOO-kas" } },
    "paulo": { greek: "Παῦλος", latin: "Paulus", pronunciation: { greek: "PAH-oo-los", latin: "PAH-oo-lus" } },
    "marcos": { greek: "Μάρκος", latin: "Marcus", pronunciation: { greek: "MAR-kos", latin: "MAR-kus" } },
    "mateus": { greek: "Ματθαῖος", latin: "Matthaeus", pronunciation: { greek: "mat-THAH-ee-os", latin: "mat-THAH-eh-us" } },
    "andré": { greek: "Ἀνδρέας", latin: "Andreas", pronunciation: { greek: "an-DREH-as", latin: "an-DREH-as" } },
    "felipe": { greek: "Φίλιππος", latin: "Philippus", pronunciation: { greek: "FEE-lip-pos", latin: "fee-LIP-pus" } },
    "gabriel": { greek: "Γαβριήλ", latin: "Gabriel", pronunciation: { greek: "ga-vree-EHL", latin: "GA-bree-el" } },
    "miguel": { greek: "Μιχαήλ", latin: "Michael", pronunciation: { greek: "mee-khah-EHL", latin: "MEE-khah-el" } },
    
    // Nomes femininos
    "maria": { greek: "Μαρία", latin: "Maria", pronunciation: { greek: "ma-REE-ah", latin: "ma-REE-ah" } },
    "ana": { greek: "Ἄννα", latin: "Anna", pronunciation: { greek: "AH-na", latin: "AH-na" } },
    "júlia": { greek: "Ἰουλία", latin: "Iulia", pronunciation: { greek: "ee-oo-LEE-ah", latin: "YOO-lee-ah" } },
    "helena": { greek: "Ἑλένη", latin: "Helena", pronunciation: { greek: "heh-LEH-nee", latin: "heh-LEH-na" } },
    "sofia": { greek: "Σοφία", latin: "Sophia", pronunciation: { greek: "so-FEE-ah", latin: "so-FEE-ah" } },
    "clara": { greek: "Κλάρα", latin: "Clara", pronunciation: { greek: "KLAH-ra", latin: "KLAH-ra" } },
    "beatriz": { greek: "Βεατρίκη", latin: "Beatrix", pronunciation: { greek: "veh-ah-TREE-kee", latin: "beh-AH-triks" } },
    "isabel": { greek: "Ἰσαβέλλα", latin: "Isabella", pronunciation: { greek: "ee-sa-VEH-la", latin: "ee-sa-BEH-la" } },
    "catarina": { greek: "Αἰκατερίνη", latin: "Catharina", pronunciation: { greek: "ah-ee-ka-teh-REE-nee", latin: "ka-tha-REE-na" } },
    "bárbara": { greek: "Βαρβάρα", latin: "Barbara", pronunciation: { greek: "var-VAH-ra", latin: "BAR-ba-ra" } }
};

// Regras de transliteração para nomes não encontrados
const transliterationRules = {
    greek: {
        'a': 'α', 'b': 'β', 'c': 'κ', 'd': 'δ', 'e': 'ε', 'f': 'φ', 'g': 'γ', 'h': 'η',
        'i': 'ι', 'j': 'ι', 'k': 'κ', 'l': 'λ', 'm': 'μ', 'n': 'ν', 'o': 'ο', 'p': 'π',
        'q': 'κ', 'r': 'ρ', 's': 'σ', 't': 'τ', 'u': 'υ', 'v': 'β', 'w': 'ω', 'x': 'ξ',
        'y': 'υ', 'z': 'ζ', 'ã': 'α', 'á': 'α', 'à': 'α', 'â': 'α', 'é': 'ε', 'ê': 'ε',
        'í': 'ι', 'ó': 'ο', 'ô': 'ο', 'õ': 'ο', 'ú': 'υ', 'ç': 'σ'
    },
    latin: {
        'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h',
        'i': 'i', 'j': 'i', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p',
        'q': 'qu', 'r': 'r', 's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'v', 'x': 'x',
        'y': 'y', 'z': 'z', 'ã': 'a', 'á': 'a', 'à': 'a', 'â': 'a', 'é': 'e', 'ê': 'e',
        'í': 'i', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ú': 'u', 'ç': 'c'
    }
};

// Elementos DOM
let currentScreen = 'welcome-screen';
let currentName = '';
let currentResult = null;

// Inicialização do jogo
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    setupEventListeners();
    playBackgroundMusic();
});

/**
 * Inicializa o jogo mostrando a tela de boas-vindas
 */
function initializeGame() {
    showScreen('welcome-screen');
    console.log('🏛️ Jogo "Meu Nome na História" iniciado!');
}

/**
 * Configura todos os event listeners
 */
function setupEventListeners() {
    // Botão de início
    document.getElementById('start-btn').addEventListener('click', function() {
        playClickSound();
        showScreen('input-screen');
        setTimeout(() => {
            document.getElementById('name-input').focus();
        }, 500);
    });

    // Botão de busca
    document.getElementById('search-btn').addEventListener('click', function() {
        const name = document.getElementById('name-input').value.trim();
        if (name) {
            searchName(name);
        } else {
            showMessage('Por favor, digite um nome!', 'warning');
        }
    });

    // Enter no input
    document.getElementById('name-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('search-btn').click();
        }
    });

    // Botão voltar
    document.getElementById('back-to-welcome').addEventListener('click', function() {
        playClickSound();
        showScreen('welcome-screen');
        document.getElementById('name-input').value = '';
    });

    // Botão tentar novamente
    document.getElementById('try-again-btn').addEventListener('click', function() {
        playClickSound();
        showScreen('input-screen');
        document.getElementById('name-input').value = '';
        setTimeout(() => {
            document.getElementById('name-input').focus();
        }, 500);
    });

    // Botões de pronúncia
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('pronounce-btn')) {
            const lang = e.target.getAttribute('data-lang');
            pronounceName(lang);
        }
    });

    // Botão de certificado
    document.getElementById('certificate-btn').addEventListener('click', function() {
        playClickSound();
        generateCertificate();
    });

    // Animações dos mascotes
    setupMascotAnimations();
}

/**
 * Mostra uma tela específica
 */
function showScreen(screenId) {
    // Esconde todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostra a tela solicitada
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
    
    // Adiciona animações específicas da tela
    addScreenAnimations(screenId);
}

/**
 * Adiciona animações específicas para cada tela
 */
function addScreenAnimations(screenId) {
    const screen = document.getElementById(screenId);
    
    switch(screenId) {
        case 'welcome-screen':
            animateWelcomeScreen();
            break;
        case 'input-screen':
            animateInputScreen();
            break;
        case 'result-screen':
            animateResultScreen();
            break;
    }
}

/**
 * Anima a tela de boas-vindas
 */
function animateWelcomeScreen() {
    const title = document.querySelector('.game-title');
    const mascot = document.querySelector('.owl-mascot');
    const button = document.getElementById('start-btn');
    
    // Reset das animações
    title.style.opacity = '0';
    mascot.style.opacity = '0';
    button.style.opacity = '0';
    
    // Animação sequencial
    setTimeout(() => {
        title.style.transition = 'opacity 1s ease-in-out';
        title.style.opacity = '1';
    }, 200);
    
    setTimeout(() => {
        mascot.style.transition = 'opacity 1s ease-in-out';
        mascot.style.opacity = '1';
    }, 800);
    
    setTimeout(() => {
        button.style.transition = 'opacity 1s ease-in-out';
        button.style.opacity = '1';
    }, 1400);
}

/**
 * Anima a tela de input
 */
function animateInputScreen() {
    const elements = document.querySelectorAll('#input-screen .content-container > *');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

/**
 * Anima a tela de resultado
 */
function animateResultScreen() {
    const elements = document.querySelectorAll('#result-screen .content-container > *');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 300);
    });
}

/**
 * Busca o nome no banco de dados
 */
function searchName(name) {
    playClickSound();
    currentName = name;
    
    // Mostra loading
    showLoading();
    
    // Simula tempo de busca para criar suspense
    setTimeout(() => {
        const normalizedName = name.toLowerCase().trim();
        let result;
        
        if (nameDatabase[normalizedName]) {
            // Nome encontrado no banco
            result = {
                found: true,
                original: name,
                greek: nameDatabase[normalizedName].greek,
                latin: nameDatabase[normalizedName].latin,
                pronunciation: nameDatabase[normalizedName].pronunciation
            };
        } else {
            // Nome não encontrado - usar transliteração
            result = {
                found: false,
                original: name,
                greek: transliterateName(normalizedName, 'greek'),
                latin: transliterateName(normalizedName, 'latin'),
                pronunciation: {
                    greek: generatePronunciation(normalizedName, 'greek'),
                    latin: generatePronunciation(normalizedName, 'latin')
                }
            };
        }
        
        currentResult = result;
        hideLoading();
        showResult(result);
        
    }, 1500); // 1.5 segundos de "busca"
}

/**
 * Transliteração de nomes não encontrados
 */
function transliterateName(name, language) {
    const rules = transliterationRules[language];
    let result = '';
    
    for (let char of name) {
        result += rules[char] || char;
    }
    
    // Capitaliza a primeira letra para latim
    if (language === 'latin') {
        result = result.charAt(0).toUpperCase() + result.slice(1);
    }
    
    return result;
}

/**
 * Gera pronúncia aproximada
 */
function generatePronunciation(name, language) {
    // Simplificação para demonstração
    if (language === 'greek') {
        return name.split('').join('-').toUpperCase();
    } else {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }
}

/**
 * Mostra o resultado da busca
 */
function showResult(result) {
    // Preenche os elementos com os dados
    document.getElementById('original-name').textContent = result.original;
    document.getElementById('greek-name').textContent = result.greek;
    document.getElementById('latin-name').textContent = result.latin;
    
    // Adiciona informação se foi encontrado ou transliterado
    const greekCard = document.querySelector('.ancient-name-card.greek');
    const latinCard = document.querySelector('.ancient-name-card.latin');
    
    if (!result.found) {
        greekCard.classList.add('sparkle');
        latinCard.classList.add('sparkle');
        
        // Adiciona nota explicativa
        const note = document.createElement('p');
        note.style.fontSize = '0.8rem';
        note.style.color = '#666';
        note.style.marginTop = '10px';
        note.style.fontStyle = 'italic';
        note.textContent = '* Transliteração aproximada';
        
        greekCard.appendChild(note.cloneNode(true));
        latinCard.appendChild(note);
    }
    
    // Anima as letras aparecendo
    animateLetters();
    
    // Toca som de sucesso
    playSuccessSound();
    
    // Mostra a tela de resultado
    showScreen('result-screen');
}

/**
 * Anima as letras aparecendo uma por uma
 */
function animateLetters() {
    const greekText = document.getElementById('greek-name');
    const latinText = document.getElementById('latin-name');
    
    animateTextLetters(greekText);
    setTimeout(() => animateTextLetters(latinText), 500);
}

/**
 * Anima as letras de um texto específico
 */
function animateTextLetters(element) {
    const text = element.textContent;
    element.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.textContent += text[i];
            playLetterSound();
        }, i * 150);
    }
}

/**
 * Pronuncia o nome na língua especificada
 */
function pronounceName(language) {
    if (!currentResult) return;
    
    playClickSound();
    
    // Usa Web Speech API se disponível
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance();
        
        if (language === 'greek') {
            utterance.text = currentResult.pronunciation.greek;
            utterance.lang = 'el-GR'; // Grego
        } else {
            utterance.text = currentResult.pronunciation.latin;
            utterance.lang = 'la'; // Latim (pode não estar disponível)
        }
        
        utterance.rate = 0.7; // Mais devagar para crianças
        utterance.pitch = 1.2; // Tom mais agudo
        
        speechSynthesis.speak(utterance);
    } else {
        // Fallback: mostra a pronúncia em texto
        const pronunciation = language === 'greek' ? 
            currentResult.pronunciation.greek : 
            currentResult.pronunciation.latin;
            
        showMessage(`Pronúncia: ${pronunciation}`, 'info');
    }
}

/**
 * Gera certificado em PDF
 */
function generateCertificate() {
    if (!currentResult) return;
    
    playClickSound();
    
    // Cria o conteúdo do certificado
    const certificateContent = `
        🏛️ CERTIFICADO DE DESCOBERTA HISTÓRICA 🏛️
        
        Certificamos que ${currentResult.original} descobriu seu nome na antiguidade:
        
        Em Grego Koiné (séc. I d.C.): ${currentResult.greek}
        Em Latim Clássico: ${currentResult.latin}
        
        Parabéns pela sua jornada através da história!
        
        Data: ${new Date().toLocaleDateString('pt-BR')}
        
        ⭐ Jogo Educacional "Meu Nome na História" ⭐
    `;
    
    // Cria um blob com o conteúdo
    const blob = new Blob([certificateContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    // Cria link para download
    const link = document.createElement('a');
    link.href = url;
    link.download = `certificado_${currentResult.original.toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Limpa a URL
    URL.revokeObjectURL(url);
    
    showMessage('Certificado baixado com sucesso! 🎉', 'success');
}

/**
 * Configura animações dos mascotes
 */
function setupMascotAnimations() {
    // Animação de piscar para a coruja
    setInterval(() => {
        const eyes = document.querySelectorAll('.eye');
        eyes.forEach(eye => {
            eye.style.transform = 'scaleY(0.1)';
            setTimeout(() => {
                eye.style.transform = 'scaleY(1)';
            }, 150);
        });
    }, 4000);
    
    // Movimento sutil dos mascotes
    const mascots = document.querySelectorAll('.owl-mascot, .scribe-mascot');
    mascots.forEach(mascot => {
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 10;
            const randomY = (Math.random() - 0.5) * 5;
            mascot.style.transform = `translate(${randomX}px, ${randomY}px)`;
            
            setTimeout(() => {
                mascot.style.transform = 'translate(0, 0)';
            }, 1000);
        }, 5000 + Math.random() * 3000);
    });
}

/**
 * Mostra loading
 */
function showLoading() {
    const inputScreen = document.getElementById('input-screen');
    inputScreen.classList.add('loading');
}

/**
 * Esconde loading
 */
function hideLoading() {
    const inputScreen = document.getElementById('input-screen');
    inputScreen.classList.remove('loading');
}

/**
 * Mostra mensagem para o usuário
 */
function showMessage(message, type = 'info') {
    // Remove mensagem anterior se existir
    const existingMessage = document.querySelector('.game-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Cria nova mensagem
    const messageDiv = document.createElement('div');
    messageDiv.className = `game-message ${type}`;
    messageDiv.textContent = message;
    
    // Estilos da mensagem
    Object.assign(messageDiv.style, {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: type === 'success' ? '#4CAF50' : 
                   type === 'warning' ? '#FF9800' : '#2196F3',
        color: 'white',
        padding: '15px 25px',
        borderRadius: '25px',
        fontFamily: 'Comic Neue, cursive',
        fontSize: '1rem',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        zIndex: '1000',
        animation: 'messageSlide 0.5s ease-out'
    });
    
    // Adiciona animação CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes messageSlide {
            from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(messageDiv);
    
    // Remove após 3 segundos
    setTimeout(() => {
        messageDiv.style.animation = 'messageSlide 0.5s ease-out reverse';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 500);
    }, 3000);
}

/**
 * Efeitos sonoros (usando Web Audio API ou sons sintéticos)
 */
function playClickSound() {
    playTone(800, 100, 0.1);
}

function playSuccessSound() {
    // Sequência de tons para som de sucesso
    playTone(523, 200, 0.2); // Dó
    setTimeout(() => playTone(659, 200, 0.2), 100); // Mi
    setTimeout(() => playTone(784, 300, 0.2), 200); // Sol
}

function playLetterSound() {
    playTone(1000 + Math.random() * 500, 50, 0.05);
}

function playBackgroundMusic() {
    // Música de fundo sutil (opcional)
    // Implementação simplificada
}

/**
 * Gera um tom usando Web Audio API
 */
function playTone(frequency, duration, volume = 0.1) {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration / 1000);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration / 1000);
    } catch (error) {
        console.log('Audio não suportado:', error);
    }
}

/**
 * Utilitários para desenvolvimento e debug
 */
function addNameToDatabase(name, greekForm, latinForm, greekPronunciation, latinPronunciation) {
    nameDatabase[name.toLowerCase()] = {
        greek: greekForm,
        latin: latinForm,
        pronunciation: {
            greek: greekPronunciation,
            latin: latinPronunciation
        }
    };
    console.log(`Nome ${name} adicionado ao banco de dados!`);
}

// Exporta funções para uso externo (se necessário)
window.GameFunctions = {
    addNameToDatabase,
    searchName,
    showScreen,
    currentResult: () => currentResult
};

// Log de inicialização
console.log('🎮 Script do jogo carregado com sucesso!');
console.log('📚 Banco de dados contém', Object.keys(nameDatabase).length, 'nomes');

// Easter egg para desenvolvedores
console.log('🥚 Easter egg: Digite "debug" como nome para ver informações técnicas!');

// Tratamento especial para o nome "debug"
const originalSearchName = window.searchName || searchName;
window.searchName = function(name) {
    if (name.toLowerCase() === 'debug') {
        console.log('🔧 Modo Debug Ativado!');
        console.log('📊 Estatísticas do jogo:', {
            nomesNoBanco: Object.keys(nameDatabase).length,
            telaAtual: currentScreen,
            ultimoResultado: currentResult
        });
        showMessage('Modo debug ativado! Veja o console.', 'info');
        return;
    }
    originalSearchName(name);
};