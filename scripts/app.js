const app = new Vue({
		el: "#app",
		data: {
			passwords: [],
			isVisible: true, // Mostrar aviso Lista Vacia, por defecto
		},
		methods: {
			newPassword(){
				let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
				let min = 10; // Cantidad minima de caracteres;
				let max = 15; // cantidad maxima de caracteres; 
				let passwordLength = Math.floor(Math.random() * (max - min + 1) + min); // La longitud de la contraseña tambien será aleatoria 
				let password = "";
				for(let i = 0; i <= passwordLength; i++){
 					let randomNumber = Math.floor(Math.random() * chars.length);
   				password += chars.substring(randomNumber, randomNumber +1);
				}
				this.passwords.push(password);
				this.isVisible = false;
			},

			deletePassword(index){
				this.passwords.splice(index, 1);
				if( this.passwords.length < 1 ){
					this.isVisible = true;
				}
			},
		},
});