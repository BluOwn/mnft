// MultiSynq Collaborative Drawing App
// Contract Configuration
const CONTRACT_ADDRESS = "0x1AC39D960301E5bC998B059133cDb880b90B4541";

// ADD YOUR CONTRACT ABI HERE
const CONTRACT_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "tokenURI",
				"type": "string"
			}
		],
		"name": "ArtworkFinalized",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "contribute",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			}
		],
		"name": "ContributorAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_tokenURI",
				"type": "string"
			}
		],
		"name": "finalizeAndMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reset",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ownerAddr",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CONTRIBUTION_FEE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contributors",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContributorCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContributors",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasContributed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ownerAddr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Monad Testnet Configuration
const MONAD_TESTNET = {
    chainId: '0x279F', // 10143
    chainName: 'Monad Testnet',
    rpcUrls: ['https://testnet.monad.xyz'],
    nativeCurrency: {
        name: 'MON',
        symbol: 'MON',
        decimals: 18
    },
    blockExplorerUrls: ['https://testnet.monadexplorer.com']
};

// Global state
let multisynqSession = null;
let provider = null;
let signer = null;
let contract = null;
let userAccount = null;
let canvas = null;
let ctx = null;
let isDrawing = false;
let currentColor = '#000000';
let currentBrushSize = 5;
let strokeCount = 0;

// Drawing state for MultiSynq synchronization
let drawingStrokes = [];
let lastSyncTime = 0;

// MultiSynq Model for synchronized drawing
class CollaborativeDrawingModel extends Multisynq.Model {
    init() {
        this.strokes = [];
        this.contributors = new Set();
        this.cursors = new Map();
        
        // Subscribe to drawing events from all users
        this.subscribe("canvas", "stroke", this.addStroke);
        this.subscribe("canvas", "clear", this.clearCanvas);
        this.subscribe("canvas", "cursor", this.updateCursor);
        
        // Cleanup old cursor data every 30 seconds
        this.future(30000).cleanupCursors();
    }
    
    addStroke(strokeData) {
        this.strokes.push({
            ...strokeData,
            id: this.random().toString(36),
            timestamp: this.now()
        });
        
        // Limit strokes to prevent memory issues
        if (this.strokes.length > 10000) {
            this.strokes = this.strokes.slice(-5000);
        }
        
        this.publish("drawing", "strokeAdded", strokeData);
    }
    
    clearCanvas() {
        this.strokes = [];
        this.publish("drawing", "canvasCleared");
    }
    
    updateCursor(cursorData) {
        this.cursors.set(cursorData.userId, {
            ...cursorData,
            timestamp: this.now()
        });
    }
    
    cleanupCursors() {
        const now = this.now();
        for (const [userId, cursor] of this.cursors.entries()) {
            if (now - cursor.timestamp > 10000) { // 10 seconds old
                this.cursors.delete(userId);
            }
        }
        this.future(30000).cleanupCursors();
    }
}

// Register the model
CollaborativeDrawingModel.register("CollaborativeDrawingModel");

// MultiSynq View for real-time collaboration
class CollaborativeDrawingView extends Multisynq.View {
    constructor(model) {
        super(model);
        this.model = model;
        
        // Subscribe to model events
        this.subscribe("drawing", "strokeAdded", this.onStrokeAdded);
        this.subscribe("drawing", "canvasCleared", this.onCanvasCleared);
        
        // Track collaborators
        this.subscribe(this.sessionId, "view-join", this.onUserJoined);
        this.subscribe(this.sessionId, "view-exit", this.onUserLeft);
        
        this.setupCanvas();
        this.updateCollaboratorsList();
        
        // Redraw all existing strokes
        this.redrawCanvas();
    }
    
    setupCanvas() {
        canvas = document.getElementById('drawingCanvas');
        ctx = canvas.getContext('2d');
        
        // Set up drawing properties
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // Mouse events
        canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        canvas.addEventListener('mousemove', (e) => this.draw(e));
        canvas.addEventListener('mouseup', () => this.stopDrawing());
        canvas.addEventListener('mouseout', () => this.stopDrawing());
        
        // Touch events
        canvas.addEventListener('touchstart', (e) => this.handleTouch(e), { passive: false });
        canvas.addEventListener('touchmove', (e) => this.handleTouch(e), { passive: false });
        canvas.addEventListener('touchend', () => this.stopDrawing(), { passive: true });
        
        // Cursor tracking
        canvas.addEventListener('mousemove', (e) => this.updateCursor(e));
        
        addActivity("Canvas initialized for collaborative drawing");
    }
    
    startDrawing(e) {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);
        
        // Start new stroke
        this.currentStroke = {
            points: [{x, y}],
            color: currentColor,
            size: currentBrushSize,
            userId: this.viewId
        };
    }
    
    draw(e) {
        if (!isDrawing || !this.currentStroke) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);
        
        // Add point to current stroke
        this.currentStroke.points.push({x, y});
        
        // Draw locally for immediate feedback
        this.drawStroke(this.currentStroke);
        
        // Throttle stroke updates to MultiSynq
        const now = Date.now();
        if (now - lastSyncTime > 50) { // 20fps max
            this.publish("canvas", "stroke", {...this.currentStroke});
            lastSyncTime = now;
        }
    }
    
    stopDrawing() {
        if (isDrawing && this.currentStroke) {
            // Send final stroke to MultiSynq
            this.publish("canvas", "stroke", {...this.currentStroke});
            isDrawing = false;
            this.currentStroke = null;
            strokeCount++;
            updateStrokeCount();
        }
    }
    
    handleTouch(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent(
            e.type === 'touchstart' ? 'mousedown' : 'mousemove',
            {
                clientX: touch.clientX,
                clientY: touch.clientY
            }
        );
        canvas.dispatchEvent(mouseEvent);
    }
    
    updateCursor(e) {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);
        
        // Send cursor position to other users
        this.publish("canvas", "cursor", {
            userId: this.viewId,
            x, y,
            color: currentColor
        });
    }
    
    onStrokeAdded(strokeData) {
        // Don't redraw our own strokes (already drawn locally)
        if (strokeData.userId !== this.viewId) {
            this.drawStroke(strokeData);
            addActivity(`User ${strokeData.userId.slice(-4)} drew a stroke`);
        }
    }
    
    onCanvasCleared() {
        this.clearCanvas();
        addActivity("Canvas cleared by a collaborator");
    }
    
    onUserJoined(viewInfo) {
        addActivity(`User ${viewInfo.viewId.slice(-4)} joined the session`);
        this.updateCollaboratorsList();
    }
    
    onUserLeft(viewInfo) {
        addActivity(`User ${viewInfo.viewId.slice(-4)} left the session`);
        this.updateCollaboratorsList();
    }
    
    drawStroke(stroke) {
        if (!stroke.points || stroke.points.length < 2) return;
        
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.size;
        ctx.globalCompositeOperation = 'source-over';
        
        ctx.beginPath();
        ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
        
        for (let i = 1; i < stroke.points.length; i++) {
            ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
        }
        
        ctx.stroke();
    }
    
    redrawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Redraw all strokes from the model
        for (const stroke of this.model.strokes) {
            this.drawStroke(stroke);
        }
        
        strokeCount = this.model.strokes.length;
        updateStrokeCount();
    }
    
    clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        strokeCount = 0;
        updateStrokeCount();
    }
    
    updateCollaboratorsList() {
        const container = document.getElementById('collaboratorsList');
        const collaborators = this.model.contributors.size || 0;
        
        document.getElementById('collaboratorCount').textContent = `${collaborators} Collaborators`;
        
        if (collaborators === 0) {
            container.innerHTML = '<p class="text-gray-400 text-sm">Join a session to see collaborators</p>';
        } else {
            container.innerHTML = `
                <div class="text-sm">
                    <p class="text-green-400">🟢 ${collaborators} active collaborators</p>
                    <p class="text-gray-400 text-xs mt-1">Drawing together in real-time</p>
                </div>
            `;
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    checkWalletConnection();
    
    // Auto-join session on load
    setTimeout(() => {
        joinMultiSynqSession();
    }, 1000);
    
    addActivity("MultiSynq Collaborative Drawing initialized");
});

// Setup event listeners
function setupEventListeners() {
    // Canvas controls
    document.getElementById('brushSize').addEventListener('input', function(e) {
        currentBrushSize = parseInt(e.target.value);
        document.getElementById('brushSizeDisplay').textContent = currentBrushSize;
    });
    
    document.getElementById('colorPicker').addEventListener('change', function(e) {
        currentColor = e.target.value;
    });
    
    document.getElementById('clearCanvas').addEventListener('click', clearCollaborativeCanvas);
    
    // Blockchain controls
    document.getElementById('connectWallet').addEventListener('click', connectWallet);
    document.getElementById('contributeToNFT').addEventListener('click', contributeToNFT);
    document.getElementById('finalizeNFT').addEventListener('click', finalizeNFT);
}

// MultiSynq session management - Single shared session
async function joinMultiSynqSession() {
    try {
        showLoading('Joining shared collaborative session...');
        
        multisynqSession = await Multisynq.Session.join({
            apiKey: '2bM9si987s2y1JmC1RVV42EPPhaxFFrjqezB5ZJiyA', // Replace with your MultiSynq API key
            appId: 'io.multisynq.collaborative.nft.drawing',
            name: 'shared-nft-drawing-session', // Fixed session name for all users
            password: 'collaborative-art-2024', // Fixed password for all users
            model: CollaborativeDrawingModel,
            view: CollaborativeDrawingView,
            viewData: {
                userAgent: navigator.userAgent,
                timestamp: Date.now(),
                walletAddress: userAccount || 'anonymous'
            }
        });
        
        hideLoading();
        
        document.getElementById('connectionStatus').textContent = 'Connected to Shared Session';
        document.getElementById('connectionStatus').className = 'px-4 py-2 rounded-full bg-green-500 text-white text-sm';
        
        addActivity("Joined shared collaborative session!");
        
    } catch (error) {
        hideLoading();
        console.error('Failed to join MultiSynq session:', error);
        addActivity("Failed to join session: " + error.message);
        alert('Failed to join collaborative session: ' + error.message);
    }
}

// Auto-check and join if wallet contributed
async function checkAndAutoJoinSession() {
    if (contract && userAccount && !multisynqSession) {
        try {
            const hasContributed = await contract.hasContributed(userAccount);
            if (hasContributed) {
                addActivity("Auto-joining: wallet has contributed to NFT");
                await joinMultiSynqSession();
            }
        } catch (error) {
            console.error('Error checking contribution status:', error);
        }
    }
}

async function leaveMultiSynqSession() {
    try {
        if (multisynqSession) {
            await multisynqSession.leave();
            multisynqSession = null;
        }
        
        document.getElementById('connectionStatus').textContent = 'Not Connected';
        document.getElementById('connectionStatus').className = 'px-4 py-2 rounded-full bg-red-500 text-white text-sm';
        document.getElementById('sessionId').textContent = 'None';
        document.getElementById('collaboratorCount').textContent = '0 Collaborators';
        
        document.getElementById('joinSession').disabled = false;
        document.getElementById('leaveSession').disabled = true;
        
        // Clear collaborators list
        document.getElementById('collaboratorsList').innerHTML = 
            '<p class="text-gray-400 text-sm">Join a session to see collaborators</p>';
        
        addActivity("Left collaborative session");
        
    } catch (error) {
        console.error('Error leaving session:', error);
        addActivity("Error leaving session: " + error.message);
    }
}

function clearCollaborativeCanvas() {
    // Only check for session, admin check is done in contract
    if (!multisynqSession) {
        alert('Please join the collaborative session first!');
        return;
    }
    
    if (confirm('Clear the canvas for all collaborators?')) {
        multisynqSession.view.publish("canvas", "clear");
        addActivity("Canvas cleared for all collaborators");
    }
}

// Wallet integration
async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        alert('Please install MetaMask to use blockchain features!');
        return;
    }

    try {
        showLoading('Connecting to wallet...');
        
        // Wait for ethereum to be ready
        if (window.ethereum.isMetaMask === undefined) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        if (accounts.length === 0) {
            throw new Error('No accounts found');
        }
        
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        userAccount = await signer.getAddress();
        
        const network = await provider.getNetwork();
        if (network.chainId !== 10143) {
            await switchToMonadTestnet();
        }
        
        contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        
        updateWalletUI();
        loadContractData();
        hideLoading();
        
        addActivity(`Wallet connected: ${userAccount.slice(0,6)}...${userAccount.slice(-4)}`);
        
    } catch (error) {
        hideLoading();
        console.error('Error connecting wallet:', error);
        
        if (error.code === 4001) {
            alert('Please approve the connection in MetaMask');
        } else if (error.code === -32002) {
            alert('MetaMask is already processing a request. Please check MetaMask.');
        } else {
            addActivity("Failed to connect wallet: " + (error.message || error));
            alert('Failed to connect wallet: ' + (error.message || error));
        }
    }
}

async function switchToMonadTestnet() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: MONAD_TESTNET.chainId }],
        });
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [MONAD_TESTNET],
                });
            } catch (addError) {
                throw new Error('Failed to add Monad Testnet to MetaMask');
            }
        } else {
            throw switchError;
        }
    }
}

function updateWalletUI() {
    document.getElementById('walletStatus').textContent = `${userAccount.slice(0,6)}...${userAccount.slice(-4)}`;
    document.getElementById('walletStatus').className = 'px-4 py-2 rounded-full bg-green-500 text-white text-sm';
    
    document.getElementById('connectWallet').textContent = 'Wallet Connected ✓';
    document.getElementById('connectWallet').disabled = true;
    document.getElementById('contributeToNFT').disabled = false;
}

async function loadContractData() {
    try {
        const contributors = await contract.getContributors();
        document.getElementById('blockchainContributors').textContent = contributors.length;
        
        const hasContributed = await contract.hasContributed(userAccount);
        document.getElementById('contributionStatus').textContent = hasContributed ? 'Contributed ✓' : 'Not contributed';
        
        const owner = await contract.owner();
        const isOwner = owner.toLowerCase() === userAccount.toLowerCase();
        
        // Show owner-only buttons if user is owner
        if (isOwner) {
            document.getElementById('finalizeNFT').style.display = 'block';
            document.getElementById('clearCanvas').style.display = 'block';
        } else {
            document.getElementById('finalizeNFT').style.display = 'none';
            document.getElementById('clearCanvas').style.display = 'none';
        }
        
        // Auto-join session if user has contributed
        await checkAndAutoJoinSession();
        
    } catch (error) {
        console.error('Error loading contract data:', error);
        addActivity("Error loading contract data: " + error.message);
    }
}

async function contributeToNFT() {
    if (!contract) {
        alert('Please connect your wallet first!');
        return;
    }
    
    try {
        showLoading('Contributing 0.1 MON...');
        
        const tx = await contract.contribute({ 
            value: ethers.utils.parseEther('0.1') 
        });
        
        addActivity(`Transaction sent: ${tx.hash.slice(0,8)}...`);
        
        await tx.wait();
        
        hideLoading();
        addActivity("Successfully contributed 0.1 MON to the NFT!");
        loadContractData();
        
        // Auto-join session after contributing
        if (!multisynqSession) {
            addActivity("Auto-joining collaborative session...");
            setTimeout(() => joinMultiSynqSession(), 1000);
        }
        
    } catch (error) {
        hideLoading();
        console.error('Error contributing:', error);
        
        if (error.message.includes('already contributed')) {
            alert('You have already contributed to this drawing!');
            addActivity("Error: Already contributed");
        } else if (error.message.includes('Must send exactly 0.1')) {
            alert('Must send exactly 0.1 MON to contribute');
            addActivity("Error: Invalid contribution amount");
        } else {
            addActivity("Failed to contribute: " + error.message);
            alert('Failed to contribute: ' + error.message);
        }
    }
}

async function finalizeNFT() {
    if (!contract) {
        alert('Please connect your wallet first!');
        return;
    }
    
    try {
        showLoading('Finalizing and minting NFT...');
        
        // Check contributor count first
        const contributorCount = await contract.getContributorCount();
        console.log('Contributor count:', contributorCount.toString());
        
        if (contributorCount.toNumber() > 1) {
            alert('ERROR: This contract can only mint to 1 contributor due to a bug. It tries to mint the same tokenId to multiple people, which is impossible in ERC721.');
            hideLoading();
            return;
        }
        
        const mockTokenURI = "test";
        
        const tx = await contract.finalizeAndMint(mockTokenURI, {
            gasLimit: 3000000
        });
        
        await tx.wait();
        
        hideLoading();
        alert('🎉 NFT minted!');
        loadContractData();
        
    } catch (error) {
        hideLoading();
        console.error('Error:', error);
        alert('Contract is broken - it cannot mint to multiple contributors. Deploy a new contract.');
    }
}

// Add this reset function for owner
async function resetContract() {
    if (!contract) {
        alert('Please connect your wallet first!');
        return;
    }
    
    try {
        showLoading('Resetting contract...');
        
        const tx = await contract.reset();
        await tx.wait();
        
        hideLoading();
        addActivity("Contract reset successfully!");
        loadContractData();
        
    } catch (error) {
        hideLoading();
        console.error('Error resetting contract:', error);
        alert('Failed to reset: ' + error.message);
    }
}


// Utility functions
function updateStrokeCount() {
    document.getElementById('strokeCount').textContent = `Total strokes: ${strokeCount}`;
}

function addActivity(message) {
    const feed = document.getElementById('activityFeed');
    const time = new Date().toLocaleTimeString();
    
    const activity = document.createElement('div');
    activity.className = 'text-xs text-gray-300 border-l-2 border-purple-400 pl-3 py-1';
    activity.innerHTML = `
        <span class="text-gray-500">${time}</span><br>
        ${message}
    `;
    
    // Remove "no activity" message
    if (feed.children.length === 1 && feed.children[0].textContent.includes('Activity will appear')) {
        feed.innerHTML = '';
    }
    
    feed.insertBefore(activity, feed.firstChild);
    
    // Limit to 50 activities
    while (feed.children.length > 50) {
        feed.removeChild(feed.lastChild);
    }
}

function showLoading(text) {
    document.getElementById('loadingText').textContent = text;
    document.getElementById('loadingOverlay').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.add('hidden');
}

async function checkWalletConnection() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                await connectWallet();
            }
        } catch (error) {
            console.error('Error checking wallet connection:', error);
        }
    }
}

// Handle account changes
if (typeof window.ethereum !== 'undefined') {
    const setupEthereumListeners = () => {
        if (window.ethereum && window.ethereum.on) {
            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length === 0) {
                    userAccount = null;
                    provider = null;
                    signer = null;
                    contract = null;
                    
                    document.getElementById('walletStatus').textContent = 'Wallet Disconnected';
                    document.getElementById('walletStatus').className = 'px-4 py-2 rounded-full bg-gray-500 text-white text-sm';
                    
                    document.getElementById('connectWallet').textContent = 'Connect Wallet';
                    document.getElementById('connectWallet').disabled = false;
                    document.getElementById('contributeToNFT').disabled = true;
                    document.getElementById('finalizeNFT').disabled = true;
                    
                    addActivity("Wallet disconnected");
                } else {
                    connectWallet();
                }
            });
            
            window.ethereum.on('chainChanged', () => {
                window.location.reload();
            });
        }
    };

    // Setup listeners after a short delay to ensure ethereum is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(setupEthereumListeners, 500);
        });
    } else {
        setTimeout(setupEthereumListeners, 500);
    }
}

// Export for debugging
window.MultiSynqCollaborativeDrawing = {
    multisynqSession,
    provider,
    signer,
    contract,
    userAccount,
    joinMultiSynqSession,
    leaveMultiSynqSession,
    connectWallet,
    contributeToNFT,
    finalizeNFT,
    CollaborativeDrawingModel,
    CollaborativeDrawingView
};