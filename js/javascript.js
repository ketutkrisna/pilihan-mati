$(document).ready(function(){


	
	$('#header2').hide();
	$('#header3').hide();
	$('#header4').hide();

	var a1=$('#a1')[0];
	var a2=$('#a2')[0];
	var a3=$('#a3')[0];

	$('#nama').focusin(function(){
		a1.play();
		$('#snama').text('ketikan nama anda');
	});
	$('#nama').focusout(function(){
		var nama = $('#nama').val();
		if(nama==""){
			$('#snama').text('ketik dulu nama anda');
		}else{
			$('#snama').text('silahkan klik masuk');
		}
		
	});
	$('#nama').keyup(function(){
		var a=30;
		var ketik=$('#nama').val();
		a4.play();
		$('#snama').text(ketik);
	});
	$('#masuk').click(function(){
		a2.play();
		var nama = $('#nama').val().toUpperCase();
		
		if(nama==""){
			$('#snama').text('nama belum diisi..!!!');
		}else{
			
			$('#masuk').text('tunggu..');
			setTimeout(function() {
				
				$('#header2').show();
				$('#header').hide();
				$('#header3').hide();
				$('#header4').hide();
				$('#datanama').html('Hello!! '+nama);
			}, 1000);
			
		}
			
	});

	$('#yes').click(function(){
		a2.play();
		var nama = $('#nama').val().toUpperCase();
		var acak= Math.floor(Math.random()*2);
		$('#yes').css('color','black');

		if(acak==0){
			
			setTimeout(function() {
				a3.play();
			$('#header2').hide();
			$('#header').hide();
			$('#header3').show();
			$('#header4').hide();
			$('#hasil').text('Sayang sekali '+nama+' kamu lebih pantas masuk neraka jahanam');
			$('#header3').css('background-image','url(images/api1.jpg)');
			$('#header3').css('background-size','cover');
			$('#header3').css('background-position','center');	
			}, 1000);
			
		}else if(acak==1){
			
			setTimeout(function() {
				a3.play();
			$('#header2').hide();
			$('#header').hide();
			$('#header3').show();
			$('#header4').hide();
			$('#hasil').text('Selamat '+nama+' kamu sangat cocok masuk surga');
			$('#header3').css('background-image','url(images/surga.jpg)');
			$('#header3').css('background-size','cover');
			$('#header3').css('background-position','center');	
			}, 1000);
			
		}if(nama=="GENGGONG" || nama=="JAJAK" || nama=="KOMANG HARJANA" || nama=="GEDE SUASTE"){
			
			setTimeout(function() {
				a3.play();
			$('#header2').hide();
			$('#header').hide();
			$('#header3').show();
			$('#header4').hide();
			$('#hasil').text('Kalo '+nama+' emang pantes nya di neraka lu jing..!!!');
			$('#header3').css('background-image','url(images/neraka1.jpg)');
			$('#header3').css('background-size','cover');
			$('#header3').css('background-position','center');	
			}, 1000);

		}else if(nama=="PUTU" || nama=="PUTU GURUH" ||nama=="KETUT KRISNA" || nama=="KETUT KRISNA SANJAYA" || nama=="KRISNA"){
			
			setTimeout(function() {
				a3.play();
			$('#header2').hide();
			$('#header').hide();
			$('#header3').show();
			$('#header4').hide();
			$('#hasil').text('Selamat '+nama+' kamu sangat cocok masuk surga');
			$('#header3').css('background-image','url(images/surga.jpg)');
			$('#header3').css('background-size','cover');
			$('#header3').css('background-position','center');	
			}, 1000);

		}
		$('#coba').click(function(){
			a2.play();
			$('#coba').text('tunggu..');
			setTimeout(function() {
			window.location.reload();
			}, 1000);
					
			});
	});

	$('#no').click(function(){
		a2.play();
		var nama = $('#nama').val().toUpperCase();
		var acak= Math.floor(Math.random()*2);
		$('#lagi').text('kembali');
		$('#no').css('color','black');
		setTimeout(function() {
		$('#header4').show();
		$('#header2').hide();
		$('#header').hide();
		$('#header3').hide();
		$('#paksa').text('Dasar '+nama+' anjing mau kabur lu ya..!!! klik kembali jing');	
			}, 1000);

		$('#lagi').click(function(){
			a2.play();
			$('#lagi').text('tunggu..');
			$('#no').css('color','white');
		setTimeout(function() {
			$('#header4').hide();
			$('#header2').show();
			$('#header').hide();
			$('#header3').hide();
			}, 1000);
		});	

		$('#yes').click(function(){

		a2.play();

		setTimeout(function() {
			if(acak==0){
			a3.play();
			$('#header2').hide();
			$('#header').hide();
			$('#header3').show();
			$('#header4').hide();
			$('#hasil').text('Sayang sekali '+nama+' kamu lebih pantas masuk neraka jahanam, makanya gak usah kabur masuk neraka kan lu jadinya jing');
			$('#header3').css('background-image','url(images/api1.jpg)');
			$('#header3').css('background-size','cover');
			$('#header3').css('background-position','center');
		}else if(acak==1){
			$('#header2').hide();
			$('#header').hide();
			$('#header3').show();
			$('#header4').hide();
			$('#hasil').text('Selamat '+nama+' kamu sangat cocok masuk surga, anda beruntung sudah kabur masih diampuni dan tetap masuk surga');
			$('#header3').css('background-image','url(images/surga.jpg)');
			$('#header3').css('background-size','cover');
			$('#header3').css('background-position','center');	
		}if(nama=="GENGGONG" || nama=="JAJAK" || nama=="KOMANG HARJANA" || nama=="GEDE SUASTE"){
			
			$('#header2').hide();
			$('#header').hide();
			$('#header3').show();
			$('#header4').hide();
			$('#hasil').text('Kalo '+nama+' emang pantes nya di neraka lu jing, makanya gak usah kabur masuk neraka kan lu jadinya jing!!!');
			$('#header3').css('background-image','url(images/neraka1.jpg)');
			$('#header3').css('background-size','cover');
			$('#header3').css('background-position','center');	
			

		}else if(nama=="PUTU" || nama=="PUTU GURUH" ||nama=="KETUT KRISNA" || nama=="KETUT KRISNA SANJAYA" || nama=="KRISNA"){
			
			
			$('#header2').hide();
			$('#header').hide();
			$('#header3').show();
			$('#header4').hide();
			$('#hasil').text('Selamat '+nama+' kamu sangat cocok masuk surga, anda beruntung sudah kabur masih diampuni dan tetap masuk surga');
			$('#header3').css('background-image','url(images/surga.jpg)');
			$('#header3').css('background-size','cover');
			$('#header3').css('background-position','center');	
			

		}
		}, 1000);
		

			
		});


	});


	
	



});