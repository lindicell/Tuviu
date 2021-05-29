// JavaScript Document
var $z = jQuery.noConflict();
$z(document).ready(function(){
	var contextFontResize = "html";
	
	var htmlFontSize = window.sessionStorage.getItem('htmlFontSize');
	
	if (htmlFontSize > 0) {
		$z(contextFontResize).animate({'font-size' : htmlFontSize + 'px'});
	}
	
	$z("#aumentar-fonte").click(function () {
		var size = $z(contextFontResize).css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z(contextFontResize).animate({'font-size' : size + 'px'});
		window.sessionStorage.setItem('htmlFontSize', size);
		// $z(contextFontResize).css("fontSize", size);
		return false;
	});

	$z("#diminuir-fonte").click(function () {
		var size = $z(contextFontResize).css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) - 2;

		$z(contextFontResize).animate({'font-size' : size + 'px'});
		window.sessionStorage.setItem('htmlFontSize', size);
		return false;
	});
	
	if (UserStore.getData().nome) {
		$('[data-user="nome"]').html(UserStore.getData().nome);
		$('[data-user="primeiroNome"]').html(UserStore.getData().nome.split(' ')[0]);
	}
	$('[data-user="cpf"]').html(UserStore.getData().cpf);
	$('[data-user="nascimento"]').html(UserStore.getData().nascimento);
	
	setTimeout(() => {
		loading(false);
	}, 200);
});

function loading(status) {
	if (status) {
		$('.loading').show();
	} else {
		$('.loading').hide();
	}
}

function gerarDataChart() {
	var dataChart = [
		{ mes: 7, label: 'Pressão no mês de julho',
		 labels: [], 
		 data: []},
		{ mes: 8, label: 'Pressão no mês de agosto',
		 labels: [], 
		 data: []},
		{ mes: 9, label: 'Pressão no mês de setembro',
		 labels: [], 
		 data: []},
		{ mes: 10, label: 'Pressão no mês de outubro',
		 labels: [], 
		 data: []},
		{ mes: 11, label: 'Pressão no mês de novembro',
		 labels: [], 
		 data: []}
	];
	
	dataChart.forEach((data) => {
		for(var i = 1; i <= 30; i++) {
			data.labels.push(i + '/' + data.mes);
			data.data.push(Math.floor(Math.random() * (180 - 70 + 1)) + 70);
		}
	});
	
	return dataChart;
}

const UserStore = {
	_data: {},
	setNome: nome => {
		UserStore._data.nome = nome;
		return UserStore;
	},
	setCpf: cpf => {
		UserStore._data.cpf = cpf;
		return UserStore;
	},
	setNascimento: nascimento => {
		UserStore._data.nascimento = nascimento;
		return UserStore;
	},
	setPossuiRelogio: possuiRelogio => {
		UserStore._data.possuiRelogio = possuiRelogio;
		return UserStore;
	},
	setCodigo: codigo => {
		UserStore._data.codigo = codigo;
		return UserStore;
	},
	setPermitoAcessoMeusDados: permitoAcessoMeusDados => {
		UserStore._data.permitoAcessoMeusDados = permitoAcessoMeusDados;
		return UserStore;
	},
	setAceitoTermosDeUso: aceitoTermosDeUso => {
		UserStore._data.aceitoTermosDeUso = aceitoTermosDeUso;
		return UserStore;
	},
	setParentesco: parentesco => {
		UserStore._data.parentesco = parentesco;
		return UserStore;
	},
	setTelefoneParente: telefoneParente => {
		UserStore._data.telefoneParente = telefoneParente;
		return UserStore;
	},
	gravar: () => {
		window.localStorage.setItem('dadosUsuario', JSON.stringify(Object.assign(UserStore.getData(), UserStore._data)));
		return UserStore;
	},
	getData: () => {
		var data = window.localStorage.getItem('dadosUsuario');

		if (data) {
		  return JSON.parse(data);
		}

		return {};
	}
}

Object.freeze(UserStore);
