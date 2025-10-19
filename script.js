const defaultConfig = {
            game_title: "Memory Master",
            welcome_message: "Challenge your friends in this epic memory battle!",
            start_button_text: "Start Epic Game",
            new_game_button_text: "Play Again",
            developer_section_title: "About This Game"
        };

        const emojiSets = {
            easy: ['🚀', '💡', '🎯'],
            medium: ['🚀', '💡', '🎯', '⭐', '🔥', '💪'],
            hard: ['🚀', '💡', '🎯', '⭐', '🔥', '💪', '🎨', '🎵', '🏆', '⚡'],
            expert: ['🚀', '💡', '🎯', '⭐', '🔥', '💪', '🎨', '🎵', '🏆', '⚡', '🌟', '🎪', '🎭', '🎸', '🎲']
        };

        const matchingSets = {
            animals: {
                easy: ['🐶', '🐱', '🐭'],
                medium: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊'],
                hard: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯'],
                expert: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐸', '🐵', '🐧', '🦄']
            },
            food: {
                easy: ['🍎', '🍌', '🍊'],
                medium: ['🍎', '🍌', '🍊', '🍇', '🍓', '🥝'],
                hard: ['🍎', '🍌', '🍊', '🍇', '🍓', '🥝', '🍑', '🍒', '🥭', '🍍'],
                expert: ['🍎', '🍌', '🍊', '🍇', '🍓', '🥝', '🍑', '🍒', '🥭', '🍍', '🥥', '🍅', '🥑', '🌶️', '🥕']
            },
            sports: {
                easy: ['⚽', '🏀', '🎾'],
                medium: ['⚽', '🏀', '🎾', '🏈', '⚾', '🏐'],
                hard: ['⚽', '🏀', '🎾', '🏈', '⚾', '🏐', '🏓', '🏸', '🥍', '🏒'],
                expert: ['⚽', '🏀', '🎾', '🏈', '⚾', '🏐', '🏓', '🏸', '🥍', '🏒', '🏑', '🥊', '🤺', '🏹', '🎯']
            },
            nature: {
                easy: ['🌸', '🌺', '🌻'],
                medium: ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼'],
                hard: ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🌵', '🌲', '🌳', '🍀'],
                expert: ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🌵', '🌲', '🌳', '🍀', '🌿', '🌾', '🌱', '🌴', '🎋']
            },
            vehicles: {
                easy: ['🚗', '🚕', '🚙'],
                medium: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️'],
                hard: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐'],
                expert: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🏍️']
            },
            space: {
                easy: ['🌟', '🌙', '☀️'],
                medium: ['🌟', '🌙', '☀️', '🪐', '🌍', '🌕'],
                hard: ['🌟', '🌙', '☀️', '🪐', '🌍', '🌕', '🌑', '🌒', '🌓', '🌔'],
                expert: ['🌟', '🌙', '☀️', '🪐', '🌍', '🌕', '🌑', '🌒', '🌓', '🌔', '🌖', '🌗', '🌘', '🌚', '🌝']
            }
        };

        const questions = [
            "What emoji best describes your morning?",
            "What's a work skill you're proud of developing?",
            "If you could have coffee with anyone, who would it be?",
            "What's your favorite way to celebrate small wins?",
            "What's one thing that always makes you smile at work?",
            "If your job was a movie genre, what would it be?",
            "What's the best piece of advice you've received recently?",
            "What's your go-to productivity hack?",
            "If you could learn any new skill instantly, what would it be?",
            "What's something you're looking forward to this week?",
            "What's your favorite way to unwind after work?",
            "If you could master any hobby, what would it be?",
            "What's the most interesting place you've visited?",
            "What's your go-to comfort food?",
            "If you could have dinner with any historical figure, who?",
            "What's a skill you'd love to teach others?",
            "What's your favorite season and why?",
            "If you could live anywhere, where would it be?",
            "What's the best compliment you've ever received?",
            "What's your favorite way to start the weekend?"
        ];

        const levels = [
            { name: "Warm Up", description: "Get ready to test your memory skills!" },
            { name: "Getting Started", description: "You're warming up nicely!" },
            { name: "Memory Builder", description: "Your brain is getting stronger!" },
            { name: "Focus Master", description: "Excellent concentration!" },
            { name: "Memory Champion", description: "You're becoming a pro!" },
            { name: "Brain Warrior", description: "Outstanding memory skills!" },
            { name: "Mind Master", description: "Your memory is incredible!" },
            { name: "Legend Status", description: "You're a memory legend!" }
        ];

        let gameState = {
            players: ['Player 1'],
            currentPlayerIndex: 0,
            playerScores: {},
            cards: [],
            flippedCards: [],
            matchedPairs: 0,
            totalPairs: 0,
            moves: 0,
            gameStarted: false,
            currentQuestion: 0,
            difficulty: 'medium',
            level: 1,
            startTime: null,
            timer: null,
            theme: 'mixed',
            gameMode: 'normal',
            speedTimer: null,
            speedTimeLeft: 30,
            mistakes: 0,
            playerMistakes: {},
            memoryPeekActive: false,
            memoryPeekTimer: null,
            powerUps: {
                hints: 3,
                shuffles: 2,
                freezes: 1
            },
            freezeActive: false
        };

        // Player Management
        function addPlayer() {
            const input = document.getElementById('playerNameInput');
            const name = input.value.trim();
            
            if (!name) return;
            if (gameState.players.length >= 6) {
                showMessage("Maximum 6 players allowed!");
                return;
            }
            if (gameState.players.includes(name)) {
                showMessage("Player name already exists!");
                return;
            }
            
            gameState.players.push(name);
            gameState.playerScores[name] = 0;
            input.value = '';
            updatePlayersList();
        }

        function removePlayer(index) {
            if (gameState.players.length <= 1) {
                showMessage("At least one player required!");
                return;
            }
            
            const playerName = gameState.players[index];
            gameState.players.splice(index, 1);
            delete gameState.playerScores[playerName];
            
            if (gameState.currentPlayerIndex >= gameState.players.length) {
                gameState.currentPlayerIndex = 0;
            }
            
            updatePlayersList();
        }

        function updatePlayersList() {
            const container = document.getElementById('playersList');
            container.innerHTML = '';
            
            gameState.players.forEach((player, index) => {
                const tag = document.createElement('div');
                tag.className = 'player-tag';
                tag.innerHTML = `${player} <button class="remove-player" onclick="removePlayer(${index})">×</button>`;
                container.appendChild(tag);
            });
        }

        function showMessage(text) {
            const questionText = document.getElementById('questionText');
            const originalText = questionText.textContent;
            questionText.textContent = text;
            setTimeout(() => {
                questionText.textContent = originalText;
            }, 2000);
        }

        function createGameBoard() {
            const gameBoard = document.getElementById('gameBoard');
            gameBoard.innerHTML = '';
            
            // Get emojis based on theme
            let emojis;
            if (gameState.theme === 'mixed') {
                emojis = emojiSets[gameState.difficulty];
            } else {
                emojis = matchingSets[gameState.theme][gameState.difficulty];
            }
            
            const cardEmojis = [...emojis, ...emojis];
            gameState.totalPairs = emojis.length;
            
            // Shuffle the cards
            for (let i = cardEmojis.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cardEmojis[i], cardEmojis[j]] = [cardEmojis[j], cardEmojis[i]];
            }
            
            gameState.cards = cardEmojis.map((emoji, index) => ({
                id: index,
                emoji: emoji,
                flipped: false,
                matched: false
            }));
            
            // Set board class based on difficulty
            gameBoard.className = `game-board board-${gameState.difficulty}`;
            
            gameState.cards.forEach((card, index) => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card';
                cardElement.dataset.cardId = index;
                cardElement.innerHTML = `
                    <div class="card-back">❓</div>
                    <div class="card-front">${card.emoji}</div>
                `;
                cardElement.addEventListener('click', () => flipCard(index));
                gameBoard.appendChild(cardElement);
            });

            // Memory mode: Show all cards for 3 seconds
            if (gameState.gameMode === 'memory') {
                showMemoryPeek();
            }
        }

        function showMemoryPeek() {
            gameState.memoryPeekActive = true;
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => card.classList.add('flipped'));
            
            gameState.memoryPeekTimer = setTimeout(() => {
                cards.forEach(card => card.classList.remove('flipped'));
                gameState.memoryPeekActive = false;
            }, 3000);
        }

        function flipCard(cardId) {
            if (!gameState.gameStarted || gameState.flippedCards.length >= 2 || gameState.memoryPeekActive) return;
            
            const card = gameState.cards[cardId];
            if (card.flipped || card.matched) return;
            
            card.flipped = true;
            gameState.flippedCards.push(cardId);
            
            const cardElement = document.querySelector(`[data-card-id="${cardId}"]`);
            cardElement.classList.add('flipped');
            
            if (gameState.flippedCards.length === 2) {
                gameState.moves++;
                updateStats();
                setTimeout(checkMatch, 1000);
            }
        }

        function checkMatch() {
            const [card1Id, card2Id] = gameState.flippedCards;
            const card1 = gameState.cards[card1Id];
            const card2 = gameState.cards[card2Id];
            const currentPlayer = gameState.players[gameState.currentPlayerIndex];
            
            if (card1.emoji === card2.emoji) {
                // Match found
                card1.matched = true;
                card2.matched = true;
                gameState.matchedPairs++;
                
                const card1Element = document.querySelector(`[data-card-id="${card1Id}"]`);
                const card2Element = document.querySelector(`[data-card-id="${card2Id}"]`);
                card1Element.classList.add('matched');
                card2Element.classList.add('matched');
                
                // Award points based on game mode
                let points = 10;
                if (gameState.gameMode === 'speed') points = 15;
                if (gameState.gameMode === 'memory') points = 20;
                if (gameState.gameMode === 'challenge') points = 25;
                
                gameState.playerScores[currentPlayer] += points;
                
                // Show new question
                showNewQuestion();
                updateLeaderboard();
                
                if (gameState.matchedPairs === gameState.totalPairs) {
                    setTimeout(showCelebration, 500);
                }
            } else {
                // No match
                card1.flipped = false;
                card2.flipped = false;
                
                const card1Element = document.querySelector(`[data-card-id="${card1Id}"]`);
                const card2Element = document.querySelector(`[data-card-id="${card2Id}"]`);
                card1Element.classList.remove('flipped');
                card2Element.classList.remove('flipped');
                
                // Handle mistakes in challenge mode
                if (gameState.gameMode === 'challenge') {
                    gameState.playerMistakes[currentPlayer] = (gameState.playerMistakes[currentPlayer] || 0) + 1;
                    gameState.mistakes++;
                    updateStats();
                    
                    if (gameState.playerMistakes[currentPlayer] >= 1) {
                        showMessage(`${currentPlayer} made a mistake! Turn skipped.`);
                    }
                }
                
                // Switch to next player
                gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
                updateCurrentPlayer();
            }
            
            gameState.flippedCards = [];
            updateStats();
        }

        function updateCurrentPlayer() {
            const currentPlayerName = gameState.players[gameState.currentPlayerIndex];
            document.getElementById('currentPlayerName').textContent = currentPlayerName;
        }

        function updateLeaderboard() {
            const container = document.getElementById('playerScores');
            const sortedPlayers = Object.entries(gameState.playerScores)
                .sort(([,a], [,b]) => b - a);
            
            container.innerHTML = '';
            sortedPlayers.forEach(([player, score], index) => {
                const scoreElement = document.createElement('div');
                scoreElement.className = 'player-score';
                const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅';
                scoreElement.innerHTML = `<span>${medal} ${player}</span><span>${score} pts</span>`;
                container.appendChild(scoreElement);
            });
        }

        function startTimer() {
            gameState.startTime = Date.now();
            gameState.timer = setInterval(() => {
                const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
                document.getElementById('timeElapsed').textContent = elapsed;
            }, 1000);
        }

        function stopTimer() {
            if (gameState.timer) {
                clearInterval(gameState.timer);
                gameState.timer = null;
            }
        }

        function startSpeedTimer() {
            if (gameState.gameMode !== 'speed') return;
            
            gameState.speedTimeLeft = 30;
            document.getElementById('speedTimeLeft').textContent = gameState.speedTimeLeft;
            document.getElementById('speedTimer').classList.remove('hidden');
            
            gameState.speedTimer = setInterval(() => {
                gameState.speedTimeLeft--;
                document.getElementById('speedTimeLeft').textContent = gameState.speedTimeLeft;
                
                if (gameState.speedTimeLeft <= 0) {
                    clearInterval(gameState.speedTimer);
                    // Auto-switch player when time runs out
                    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
                    updateCurrentPlayer();
                    showMessage(`Time's up! Next player's turn.`);
                    startSpeedTimer(); // Start timer for next player
                }
            }, 1000);
        }

        function stopSpeedTimer() {
            if (gameState.speedTimer) {
                clearInterval(gameState.speedTimer);
                gameState.speedTimer = null;
            }
        }

        function showNewQuestion() {
            const questionText = document.getElementById('questionText');
            questionText.textContent = questions[gameState.currentQuestion % questions.length];
            gameState.currentQuestion++;
        }

        function updateStats() {
            document.getElementById('moves').textContent = gameState.moves;
            document.getElementById('matches').textContent = gameState.matchedPairs;
            document.getElementById('currentLevel').textContent = gameState.level;
            
            // Show/hide mode-specific stats
            if (gameState.gameMode === 'challenge') {
                document.getElementById('mistakeCounter').classList.remove('hidden');
                document.getElementById('mistakes').textContent = gameState.mistakes;
            } else {
                document.getElementById('mistakeCounter').classList.add('hidden');
            }
        }

        function updateLevelInfo() {
            const levelData = levels[(gameState.level - 1) % levels.length];
            document.getElementById('levelTitle').textContent = `Level ${gameState.level} - ${levelData.name}`;
            document.getElementById('levelDescription').textContent = levelData.description;
        }

        function startGame() {
            gameState.difficulty = document.getElementById('difficultySelect').value;
            gameState.theme = document.getElementById('themeSelect').value;
            gameState.gameMode = document.getElementById('gameModeSelect').value;
            gameState.gameStarted = true;
            gameState.matchedPairs = 0;
            gameState.moves = 0;
            gameState.mistakes = 0;
            gameState.flippedCards = [];
            gameState.currentPlayerIndex = 0;
            
            // Initialize player scores and mistakes
            gameState.players.forEach(player => {
                if (!(player in gameState.playerScores)) {
                    gameState.playerScores[player] = 0;
                }
                gameState.playerMistakes[player] = 0;
            });
            
            createGameBoard();
            updateStats();
            updateLevelInfo();
            updateCurrentPlayer();
            updateLeaderboard();
            showNewQuestion();
            startTimer();
            
            // Start mode-specific timers
            if (gameState.gameMode === 'speed') {
                startSpeedTimer();
            }
            
            // Show/hide UI elements
            document.getElementById('playerSetup').classList.add('hidden');
            document.getElementById('levelInfo').classList.remove('hidden');
            document.getElementById('currentPlayerDisplay').classList.remove('hidden');
            document.getElementById('gameStats').classList.remove('hidden');
            document.getElementById('leaderboard').classList.remove('hidden');
            document.getElementById('startBtn').classList.add('hidden');
            document.getElementById('newGameBtn').classList.remove('hidden');
            document.getElementById('celebration').classList.add('hidden');
        }

        function nextLevel() {
            gameState.level++;
            gameState.matchedPairs = 0;
            gameState.moves = 0;
            gameState.mistakes = 0;
            gameState.flippedCards = [];
            gameState.currentPlayerIndex = 0;
            
            // Reset player mistakes
            gameState.players.forEach(player => {
                gameState.playerMistakes[player] = 0;
            });
            
            createGameBoard();
            updateStats();
            updateLevelInfo();
            updateCurrentPlayer();
            showNewQuestion();
            startTimer();
            
            // Restart mode-specific timers
            if (gameState.gameMode === 'speed') {
                startSpeedTimer();
            }
            
            document.getElementById('celebration').classList.add('hidden');
            document.getElementById('nextLevelBtn').classList.add('hidden');
        }

        function newGame() {
            stopTimer();
            stopSpeedTimer();
            
            if (gameState.memoryPeekTimer) {
                clearTimeout(gameState.memoryPeekTimer);
            }
            
            gameState = {
                players: gameState.players,
                currentPlayerIndex: 0,
                playerScores: {},
                cards: [],
                flippedCards: [],
                matchedPairs: 0,
                totalPairs: 0,
                moves: 0,
                gameStarted: false,
                currentQuestion: 0,
                difficulty: 'medium',
                level: 1,
                startTime: null,
                timer: null,
                theme: 'mixed',
                gameMode: 'normal',
                speedTimer: null,
                speedTimeLeft: 30,
                mistakes: 0,
                playerMistakes: {},
                memoryPeekActive: false,
                memoryPeekTimer: null
            };
            
            // Reset player scores
            gameState.players.forEach(player => {
                gameState.playerScores[player] = 0;
            });
            
            // Show/hide UI elements
            document.getElementById('playerSetup').classList.remove('hidden');
            document.getElementById('levelInfo').classList.add('hidden');
            document.getElementById('currentPlayerDisplay').classList.add('hidden');
            document.getElementById('gameStats').classList.add('hidden');
            document.getElementById('leaderboard').classList.add('hidden');
            document.getElementById('startBtn').classList.remove('hidden');
            document.getElementById('newGameBtn').classList.add('hidden');
            document.getElementById('nextLevelBtn').classList.add('hidden');
            document.getElementById('celebration').classList.add('hidden');
            document.getElementById('speedTimer').classList.add('hidden');
            document.getElementById('mistakeCounter').classList.add('hidden');
            
            document.getElementById('gameBoard').innerHTML = '';
            document.getElementById('questionText').textContent = 'Set up your players and start the game to discover conversation starters!';
            document.getElementById('timeElapsed').textContent = '0';
            document.getElementById('speedTimeLeft').textContent = '30';
            document.getElementById('mistakes').textContent = '0';
        }

        function showCelebration() {
            stopTimer();
            stopSpeedTimer();
            
            // Update footer stats
            incrementGamesPlayed();
            const topScore = Math.max(...Object.values(gameState.playerScores));
            updateBestScore(topScore);
            
            const levelData = levels[(gameState.level - 1) % levels.length];
            const modeBonus = gameState.gameMode === 'speed' ? ' (Speed Bonus!)' : 
                             gameState.gameMode === 'memory' ? ' (Memory Master!)' : 
                             gameState.gameMode === 'challenge' ? ' (Challenge Conquered!)' : '';
            
            document.getElementById('celebrationText').textContent = 
                `${levelData.description}${modeBonus} Ready for Level ${gameState.level + 1}?`;
            document.getElementById('celebration').classList.remove('hidden');
            document.getElementById('nextLevelBtn').classList.remove('hidden');
        }

        function render(config) {
            document.getElementById('gameTitle').textContent = config.game_title || defaultConfig.game_title;
            document.getElementById('welcomeMessage').textContent = config.welcome_message || defaultConfig.welcome_message;
            document.getElementById('startBtn').textContent = config.start_button_text || defaultConfig.start_button_text;
            document.getElementById('newGameBtn').textContent = config.new_game_button_text || defaultConfig.new_game_button_text;
            document.getElementById('developerSectionTitle').textContent = config.developer_section_title || defaultConfig.developer_section_title;
        }

        // Theme Management
        function toggleTheme() {
            const body = document.body;
            const themeBtn = document.getElementById('themeBtn');
            const isDark = body.classList.contains('dark-theme');
            
            if (isDark) {
                body.classList.remove('dark-theme');
                themeBtn.textContent = '🌙';
                themeBtn.title = 'Switch to Dark Theme';
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.add('dark-theme');
                themeBtn.textContent = '☀️';
                themeBtn.title = 'Switch to Light Theme';
                localStorage.setItem('theme', 'dark');
            }
        }

        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            const themeBtn = document.getElementById('themeBtn');
            
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-theme');
                themeBtn.textContent = '☀️';
                themeBtn.title = 'Switch to Light Theme';
            } else {
                themeBtn.textContent = '🌙';
                themeBtn.title = 'Switch to Dark Theme';
            }
        }

        // Event listeners
        document.getElementById('startBtn').addEventListener('click', startGame);
        document.getElementById('newGameBtn').addEventListener('click', newGame);
        document.getElementById('nextLevelBtn').addEventListener('click', nextLevel);
        document.getElementById('addPlayerBtn').addEventListener('click', addPlayer);
        document.getElementById('themeBtn').addEventListener('click', toggleTheme);
        document.getElementById('logoSection').addEventListener('click', () => {
            // Add reload animation
            const logoIcon = document.querySelector('.logo-icon');
            logoIcon.style.animation = 'none';
            logoIcon.offsetHeight; // Trigger reflow
            logoIcon.style.animation = 'bounce 0.6s ease-in-out';
            
            // Reload page after animation
            setTimeout(() => {
                window.location.reload();
            }, 600);
        });
        document.getElementById('developerBtn').addEventListener('click', () => {
            document.getElementById('developerModal').classList.remove('hidden');
        });
        document.getElementById('closeModalBtn').addEventListener('click', () => {
            document.getElementById('developerModal').classList.add('hidden');
        });
        document.getElementById('developerModal').addEventListener('click', (e) => {
            if (e.target.id === 'developerModal') {
                document.getElementById('developerModal').classList.add('hidden');
            }
        });

        // Enter key support for adding players
        document.getElementById('playerNameInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addPlayer();
            }
        });

        // Initialize player scores
        gameState.players.forEach(player => {
            gameState.playerScores[player] = 0;
        });

        // Footer stats management
        let footerStats = {
            gamesPlayed: parseInt(localStorage.getItem('memoryMasterGamesPlayed') || '0'),
            bestScore: parseInt(localStorage.getItem('memoryMasterBestScore') || '0')
        };

        function updateFooterStats() {
            document.getElementById('footerGamesPlayed').textContent = footerStats.gamesPlayed;
            document.getElementById('footerBestScore').textContent = footerStats.bestScore;
        }

        function incrementGamesPlayed() {
            footerStats.gamesPlayed++;
            localStorage.setItem('memoryMasterGamesPlayed', footerStats.gamesPlayed.toString());
            updateFooterStats();
        }

        function updateBestScore(score) {
            if (score > footerStats.bestScore) {
                footerStats.bestScore = score;
                localStorage.setItem('memoryMasterBestScore', footerStats.bestScore.toString());
                updateFooterStats();
            }
        }



        // Create floating particles for intro animation
        function createParticles() {
            const particlesContainer = document.getElementById('introParticles');
            if (!particlesContainer) return;
            
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random starting position
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
                
                // Random size variation
                const size = Math.random() * 3 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random opacity
                particle.style.opacity = Math.random() * 0.5 + 0.3;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize particles when page loads
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
        });

        // Initialize SDK
        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                render,
                mapToCapabilities: (config) => ({
                    recolorables: [],
                    borderables: [],
                    fontEditable: undefined,
                    fontSizeable: undefined
                }),
                mapToEditPanelValues: (config) => new Map([
                    ["game_title", config.game_title || defaultConfig.game_title],
                    ["welcome_message", config.welcome_message || defaultConfig.welcome_message],
                    ["start_button_text", config.start_button_text || defaultConfig.start_button_text],
                    ["new_game_button_text", config.new_game_button_text || defaultConfig.new_game_button_text],
                    ["developer_section_title", config.developer_section_title || defaultConfig.developer_section_title]
                ])
            });
        }

        // Initial render
        render(defaultConfig);
        updatePlayersList();
        loadTheme();
        updateFooterStats();
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'99119607802d25b1',t:'MTc2MDg5MDY1MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();