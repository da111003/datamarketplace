// // Inside script.js
// // Dummy data for the marketplace
// const datasetList = [
//     { id: 1, name: 'Dataset 1', price: 10 },
//     { id: 2, name: 'Dataset 2', price: 20 },
//     { id: 3, name: 'Dataset 3', price: 15 },
// ];

// // Function to dynamically load the login form with role selection
// function loadLoginFormWithRoleSelection() {
//     const userPanel = document.getElementById('userPanel');

//     const loginForm = document.createElement('form');
//     loginForm.innerHTML = `<h2>Login</h2>
//                            <label for="username">Username:</label>
//                            <input type="text" id="username" required>
//                            <label for="password">Password:</label>
//                            <input type="password" id="password" required>
//                            <label>Choose your role:</label>
//                            <input type="radio" id="buyer" name="role" value="buyer" checked>
//                            <label for="buyer">Buyer</label>
//                            <input type="radio" id="seller" name="role" value="seller">
//                            <label for="seller">Seller</label>
//                            <button type="button" onclick="authenticateUser()">Login</button>
//                            <p>Don't have an account? <span onclick="loadSignupForm()">Sign up</span></p>`;

//     userPanel.innerHTML = '';
//     userPanel.appendChild(loginForm);
// }

// // Function to dynamically load the signup form
// function loadSignupForm() {
//     const userPanel = document.getElementById('userPanel');

//     const signupForm = document.createElement('form');
//     signupForm.innerHTML = `<h2>Sign Up</h2>
//                             <label for="newUsername">Username:</label>
//                             <input type="text" id="newUsername" required>
//                             <label for="newPassword">Password:</label>
//                             <input type="password" id="newPassword" required>
//                             <button type="button" onclick="showMarketplace()">Sign Up</button>
//                             <p>Already have an account? <span onclick="loadLoginFormWithRoleSelection()">Login</span></p>`;

//     userPanel.innerHTML = '';
//     userPanel.appendChild(signupForm);
// }

// // Function to authenticate user and redirect based on the selected role
// function authenticateUser() {
//     const usernameInput = document.getElementById('username');
//     const passwordInput = document.getElementById('password');
//     const roleRadio = document.querySelector('input[name="role"]:checked');

//     const username = usernameInput.value;
//     const password = passwordInput.value;
//     const role = roleRadio ? roleRadio.value : '';

//     // Basic authentication logic (replace this with your actual authentication logic)
//     if (username === 'demo' && password === 'password') {
//         if (role === 'buyer') {
//             loadBuyerMarketplace();
//         } else if (role === 'seller') {
//             loadSellerPage();
//         }
//     } else {
//         // Authentication failed, you can show an error message or handle it accordingly
//         alert('Invalid username or password');
//     }
// }

// // Function to dynamically load the marketplace content for buyers
// function loadBuyerMarketplace() {
//     loadMarketplaceContent();
// }

// // Function to dynamically load the seller page
// function loadSellerPage() {
//     const userPanel = document.getElementById('userPanel');
//     userPanel.innerHTML = '<h2>Sell Your Dataset</h2>' +
//                           '<button onclick="sellDataset()">Sell Dataset</button>' +
//                           '<p>Back to <span onclick="loadLoginFormWithRoleSelection()">Login</span></p>';
// }

// // Function to dynamically load the marketplace content
// function loadMarketplaceContent() {
//     const marketplaceDiv = document.getElementById('marketplace');

//     // Reset the inner HTML to clear previous content
//     marketplaceDiv.innerHTML = '<h2>Marketplace</h2>';

//     // Display each dataset as a card
//     datasetList.forEach(dataset => {
//         const card = document.createElement('div');
//         card.className = 'card';
//         card.innerHTML = `<h3>${dataset.name}</h3>
//                           <p>Price: $${dataset.price}</p>
//                           <button onclick="buyDataset(${dataset.id})">Buy</button>`;
//         marketplaceDiv.appendChild(card);
//     });

//     // Show the marketplace div
//     marketplaceDiv.style.display = 'block';
// }

// // Dummy function for buying a dataset
// function buyDataset(datasetId) {
//     // Perform blockchain transaction logic here
//     alert(`Transaction successful! You bought dataset ${datasetId}.`);
// }

// // Dummy function for selling a dataset
// function sellDataset() {
//     alert('You are now on the seller page. Implement the logic for selling a dataset here.');
// }

// // Function to show the login form initially
// function showLogin() {
//     loadLoginFormWithRoleSelection();
// }

// // Call the function to show the login form initially
// document.addEventListener("DOMContentLoaded", showLogin);

const contractABI = [
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
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "provider",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "DataListed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "provider",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "DataPurchased",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "buyerData",
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
		"name": "dataRegistry",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "provider",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "enum DataMarketplace.DataStatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			}
		],
		"name": "getDataIdsForBuyer",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "provider",
				"type": "address"
			}
		],
		"name": "getDataIdsForProvider",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "listData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextDataId",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "providerData",
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
				"name": "dataId",
				"type": "uint256"
			}
		],
		"name": "purchaseData",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]; // Replace with the ABI of your smart contract

// Connect to the local Ethereum node (adjust the URL as needed)
const web3 = new Web3('http://localhost:8545');

// Replace with the address of your deployed smart contract on Remix
const contractAddress = '0x4996ea28e209783999aB99b18043121314194fB0';

// Create a contract instance
const dataMarketplaceContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to list data
async function listData() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    try {
        const accounts = await web3.eth.getAccounts();
        const providerAddress = accounts[0];

        // Call the contract method to list data
        const transaction = dataMarketplaceContract.methods.listData(name, description, price).send({
            from: providerAddress,
            gas: 2000000, // Adjust gas limit as needed
        });

        // Wait for the transaction to be mined
        const receipt = await transaction;

        console.log('Data listed successfully:', receipt);
    } catch (error) {
        console.error('Error listing data:', error);
    }
}

document.getElementById('uploadForm').addEventListener('submit', async (event) => {
          event.preventDefault();

          const formData = new FormData(event.target);

          try {
              const response = await fetch('/', {
                  method: 'POST',
                  body: formData,
              });

              const result = await response.json();
              document.getElementById('para').innerText = `Prediction: ${result.prediction}`;
          } catch (error) {
              console.error('Error:', error);
          }
      });
