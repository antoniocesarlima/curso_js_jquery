function consultaCep(){
	$(".barra-progresso").show();
	var cep = document.getElementById('cep').value;
	var url = "https://viacep.com.br/ws/" + cep + "/json/";
	console.log(url);
	$.ajax({
		url: url,
		type: "GET",
		success: function(response){
			console.log(response);
			$("#titulo_cep").html("CEP " + response.cep);
			$("#localidade").html(response.localidade);
			$("#uf").html(response.uf);
			$("#logradouro").html(response.logradouro);
			$("#bairro").html(response.bairro);
			$(".cep").show();
			$(".barra-progresso").hide();
			//$("#ddd").html(response.ddd);
			//document.getElementById('ddd').innerHTML = response.ddd;
		}
	})
}

$(function(){
	$(".cep").hide();
	$(".barra-progresso").hide();
});
