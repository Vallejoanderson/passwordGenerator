const app = new Vue({
		el: "#app",
		data: {
			passwords: [],
			isVisible: true, // Mostrar aviso Lista Vacia, por defecto
			warning: false,
			myPassword: '',
		},



		methods: {
			newPassword(){
				let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
				let min = 10, max = 15, password, strongPassword = false; // Cantidad minima y maxima de caracteres;
				let passwordLength = Math.floor(Math.random() * (max - min + 1) + min); // La longitud de la contraseña tambien será aleatoria 
				while(!strongPassword){
					password = "";
					for( let i = 0; i <= passwordLength; i++){
						let randomNumber = Math.floor(Math.random() * chars.length);
						password += chars.substring(randomNumber, randomNumber +1);
					}
					strongPassword = this.testPassword(password);
				}
				this.passwords.push(password); //Aqui la contraseña está entrando en un arreglo junto con otras, modificar esta linea dependiendo de a donde se desea enviar la contraseña o que se quiera hacer con ella.
				this.isVisible = false; //Remover al reusar función en otro proyecto
			},
			testPassword(password){ //Está función retorna true o false según se cumplan los requisitos del regex
				let goodPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
				return ( goodPassword.test(password) );
			},



			deletePassword(index){
				this.passwords.splice(index, 1);
				if( this.passwords.length < 1 ){
					this.isVisible = true;
				}
			},
		},
});