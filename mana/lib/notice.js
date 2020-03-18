$(function(){
    $('.emproLink').click(function(){
                    alert('이미 마감된 공고입니다');
                    window.location.reload();
                    return false;
                })
});