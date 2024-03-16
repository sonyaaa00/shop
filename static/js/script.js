$(document).ready(function () {
	function validation() {
		err = 0;
		$('.form-control').each(function () {
			if($(this).val() == ''){
				$(this).addClass('error');
				err = 1
			}else{
				$(this).removeClass('error');
			}
		})

		if (window.location=='/'){
		    if ($('#paswd').val() != $('#paswd2').val() && $('#paswd').val()!=''){
                err = 1
                $('#paswd').addClass('error');
                $('#paswd2').addClass('error');
		    }else{
                $('#paswd').removeClass('error');
                $('#paswd2').removeClass('error');
            }
		}
		if (err){
			return false
		}else{
			return true
		}
	}
	$('#rega_btn').on('click',function(){
		if(validation()){
			$.ajax({
			  method: "POST",
			  url: "/ajax/registration",
			  contentType: "application/json",
			  dataType: 'json',
			  data: JSON.stringify({ 
			  	login: $('#login').val(), 
			  	paswd: $('#paswd').val(),
			  	name: $('#name').val(),
			  	surname: $('#surname').val(),
			  	phone: $('#phone').val(),
			  	mail: $('#mail').val(),
			  }),
			})
			.done(function(result) {
			    window.location.href = '/login';
			});
		}
	})

	$('#rega_btn').on('click',function(){
		if(validation()){
			$.ajax({
			  method: "POST",
			  url: "/ajax/registration",
			  contentType: "application/json",
			  dataType: 'json',
			  data: JSON.stringify({
			  	login: $('#login').val(),
			  	paswd: $('#paswd').val(),
			  	name: $('#name').val(),
			  	surname: $('#surname').val(),
			  	phone: $('#phone').val(),
			  	mail: $('#mail').val(),
			  }),
			})
			.done(function(result) {
			    window.location.href = '/login';
			});
		}
	})

	$('#login_btn').on('click',function(){
		if(validation()){
			$.ajax({
			  method: "POST",
			  url: "/ajax/login",
			  contentType: "application/json",
			  dataType: 'json',
			  data: JSON.stringify({ 
			  	login: $('#login').val(), 
			  	paswd: $('#paswd3').val(),
			  }),
			})
			.done(function(result) {
			    if(result.result){
			    	window.location.href = '/darkshop';
			    }else{
			    	$('#login').addClass('error');
			    	$('#paswd').addClass('error');
			    	$('.invalid-feedback').html(result.error);
			    }
			});
		}
	})
})

