<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="icon" href="./assets/imgs/anonymous.jpg">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@300;400;600&display=swap" rel="stylesheet">
    <script src="./assets/js/index.js"></script>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
        }
        .login-container {
            animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .boot-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }
        .windows-logo {
            width: 100px;
            height: 100px;
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            animation: zoomPulse 3s infinite;
        }
        .android-logo {
            width: 100px;
            height: 100px;
            background-image: url('https://cdn.freebiesupply.com/logos/large/2x/android-logo-png-transparent.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            animation: zoomPulse 3s infinite;
        }
        .loading-dots {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .dot {
            width: 10px;
            height: 10px;
            background-color: white;
            border-radius: 50%;
            margin: 0 5px;
            animation: dotPulse 1.5s infinite;
        }
        .dot:nth-child(2) {
            animation-delay: 0.5s;
        }
        .dot:nth-child(3) {
            animation-delay: 1s;
        }
        @keyframes zoomPulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes dotPulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 1; }
        }
    </style>
</head>
<body class="h-full overflow-hidden bg-cover bg-center bg-blue-100" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/imgs/windows.jpg');">
    <div id="boot-screen" class="boot-screen">
        <div id="boot-logo" class="windows-logo"></div>
        <p id="boot-text" class="text-white text-xl font-semibold mt-8">Booting Windows</p>
        <div class="loading-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>

    <div id="login-content" class="hidden fixed inset-0">
        <div class="flex flex-col items-center justify-center h-full login-container">
            <img src="./assets/imgs/lol.png" alt="Profile" class="w-32 h-32 rounded-full mb-4 shadow-lg">
            <h2 class="text-3xl font-semibold text-white">QMS</h2>
            <div class="rounded-lg p-8 w-80">
                <form id="loginForm" class="space-y-4">
                    <select id="passwordSelect" class="w-full px-4 py-2 rounded-md bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="" disabled selected>Select password</option>
                        <option value="password1">D8E#y_z5vP4AP11r2L</option>
                    </select>
                </form>
            </div>
            <div id="loadingAnimation" class="hidden -mt-6">
                <div class="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
        </div>

        <div class="fixed bottom-8 right-12 flex space-x-4">
            <button class="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
            </button>
            <button class="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" version="1.1" id="Capa_1" class="h-6 w-6" viewBox="0 0 575.279 575.279" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M238.502,115.644v-46.98C120.943,91.644,31.94,195.39,31.94,319.578c-0.003,140.994,114.707,255.701,255.7,255.701    c140.992,0,255.699-114.707,255.699-255.701c0-124.188-89.006-227.934-206.561-250.915v46.98    c92.047,22.182,160.662,105.172,160.662,203.935c0,115.686-94.113,209.803-209.8,209.803    c-115.687,0-209.803-94.117-209.803-209.803C77.837,220.816,146.455,137.826,238.502,115.644z"/>
                            <path d="M312.298,256.905V111.274V65.089V24.658C312.298,11.041,301.261,0,287.64,0c-13.62,0-24.657,11.041-24.657,24.658v40.432    v46.185v145.631c0,13.617,11.037,24.658,24.657,24.658C301.261,281.563,312.298,270.522,312.298,256.905z"/>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    </div>

    <script>
        window.addEventListener('load', function() {
            const isMobile = window.innerWidth <= 728;
            const bootLogo = document.getElementById('boot-logo');
            const bootText = document.getElementById('boot-text');

            if (isMobile) {
                bootLogo.classList.remove('windows-logo');
                bootLogo.classList.add('android-logo');
                bootText.textContent = 'Booting Android';
            } else {
                bootLogo.classList.add('windows-logo');
                bootText.textContent = 'Booting Windows';
            }

            setTimeout(function() {
                document.getElementById('boot-screen').style.opacity = '0';
                document.getElementById('boot-screen').style.transition = 'opacity 1s ease-out';
                setTimeout(function() {
                    document.getElementById('boot-screen').style.display = 'none';
                    document.getElementById('login-content').classList.remove('hidden');
                }, 1000);
            }, 5000); // 5 seconds boot screen
        });

        document.getElementById('passwordSelect').addEventListener('change', function(e) {
            if (e.target.value === 'password1') {
                document.getElementById('loginForm').classList.add('hidden');
                document.getElementById('loadingAnimation').classList.remove('hidden');
                
                // Simulate loading
                setTimeout(() => {
                    document.getElementById('loadingAnimation').classList.add('animate-pulse');
                }, 2000);

                // Redirect after loading animation
                setTimeout(() => {
                    if (window.innerWidth <= 728) {
                        window.location.href = './mobile.html';
                    } else {
                        window.location.href = './desktop.html';
                    }
                }, 4000);
            }
        });

        // Reset select element on page load
        window.addEventListener('load', function() {
            const passwordSelect = document.getElementById('passwordSelect');
            passwordSelect.selectedIndex = 0;
        });

        // Prevent form submission on enter key
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
        });
    </script>
</body>
</html>
