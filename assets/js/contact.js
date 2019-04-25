$(function(){
  $('#contact_submit').click(function(event){
    event.preventDefault();
    console.log('submit');
    var email = $('#xs_contact_email').val();
    var name = $('#xs_contact_name').val();
    var msg = $('#x_contact_massage').val();

    const url = '//mc.us20.list-manage.com/subscribe/form-post-json?u=05d404619cf8ee88ee605c21c&id=fccb1911a5&popup=true';
    $.get(url + '&EMAIL=' + email + '&NAME=' + name + '&MSG' + msg).then(function(data){
      if(data.result === 'success'){
        layer.msg('提交成功');
        $('#xs_contact_email').val('');
        $('#xs_contact_name').val('');
        $('#x_contact_massage').val('');
      } else if(data.result === 'error'){
        layer.msg('请不要重复提交');
      }
    });


  })
});