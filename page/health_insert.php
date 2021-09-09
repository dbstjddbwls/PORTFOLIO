<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/health_insert.css">
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
    <header>
        <?php include "../lib/content_header.php"; ?>
        <script>
            $(function(){
                let select_change_val;
                let cate_list = new Array();
                let name_list = new Array();
                let set_list = new Array();
                let weight_list = new Array();
                let reps_list = new Array();

                let data_list = new Array();
                let child_data = new Array();

                let num;

                $(document).on('click','.select_value_box',function(){
                    $(this).addClass('selecting_value');
                    $(this).parents('li').addClass('selecting_list');
                    $('.select_category, .dimed').addClass('active');
                });

                $(document).on('click','.select_category ul li',function(){
                    select_change_val = $(this).html();
                    $('.select_category, .dimed').removeClass('active');
                    $('.selecting_value p').html(select_change_val);
                    $('.selecting_list select').val(select_change_val); 
                    $('.select_value_box').removeClass('selecting_value')
                    $('.health_box ul li').removeClass('selecting_list')
                })

                $(document).on('click','.insert_remove',function(){
                    let insert_list_count = document.querySelectorAll('.health_box > ul > li');
                    if(insert_list_count.length > 1){
                        $(this).parents('li').remove();
                    }
                    else{
                        alert('한 종목 이상은 선택해야합니다.')
                    }
                })

                $(document).on('click','.add_list', function(){
                    let c_lists = $('.c_list').length;
                    num = c_lists;
                    let new_list = $(`
                            <li class="c_list">
                                <div class="category">
                                    <select class="cate_select" name="cate">
                                        <option value="Chest" selected>Chest</option>
                                        <option value="Shoulder">Shoulder</option>
                                        <option value="Back">Back</option>
                                        <option value="Leg">Leg</option>
                                        <option value="Biceps">Biceps</option>
                                        <option value="Triceps">Triceps</option>
                                        <option value="Abs">Abs</option>
                                        <option value="Etc">Etc</option>
                                    </select>
                                    <div class="select_value_box">
                                        <p class="select_value">
                                            Chest
                                        </p>
                                        <span class="select_value_btn">
                                            <img src="../img/sort-down-solid.svg" alt="운동 카테고리 선택">
                                        </span>
                                    </div>
                                </div>
                                <div class="insert_info">
                                    <input type="text" class="insert_name" name="insert_name" placeholder="Name">
                                    <input type="text" class="insert_set" name="insert_set" placeholder="Set">
                                    <input type="text" class="insert_weight" name="insert_weight" placeholder="Weight">
                                    <input type="text" class="insert_reps" name="insert_reps" placeholder="Reps">
                                    <div class="insert_remove">
                                        <img src="../img/trash-alt-regular.svg" alt="삭제하기">
                                    </div>
                                </div>
                            </li>`)

                    $('.health_box > ul').append(new_list);
                })

                $(document).on('click','.add_health',function(){
                    console.dir("--- data ---")
                    let a1 = document.querySelectorAll('.c_list');
                    let a2 = document.querySelector('#parts');
                    let a3 = document.querySelector('#date');
                    let a4 = document.querySelector('#memo');


                    for(var i=1; i <= a1.length; i++){
                        var json_data = new Object();

                        json_data.cate = a1[Number(i)-1].querySelector('.cate_select').value;
                        json_data.name = a1[Number(i)-1].querySelector('.insert_name').value;
                        json_data.set = a1[Number(i)-1].querySelector('.insert_set').value;
                        json_data.weight = a1[Number(i)-1].querySelector('.insert_weight').value;
                        json_data.reps = a1[Number(i)-1].querySelector('.insert_reps').value


                        data_list.push(json_data);
                    }

                    console.dir(a2.value)
                    console.dir(a3.value)
                    console.dir(a4.value)
                    console.dir(data_list)
                    console.dir("--- ajax ---")

                    $.ajax({
                        url:'./health_insert_form.php',
                        dataType:'POST',
                        dataType:'json',
                        data:{
                            parts:a2.value,
                            date:a3.value,
                            memo:a4.value,
                            child:JSON.stringify(data_list),
                        },
                        success:function(data, status, xhr){
                            console.dir(data);
                        },
                        error:function(xqXHR, textStatus,errorThrown){
                            console.dir(xqXHR);
                            console.dir(textStatus)
                            console.dir(errorThrown)
                        }
                    })
                })
            })
        </script>
    </header>
    <main>
        <section id="insert">
            <div class="insert_form">
                    <input type="text" name="parts" id="parts" placeholder="운동 부위">
                    <input type="date" name="date" id="date" placeholder="운동 일자">
                    <input type="text" name="memo" id="memo" placeholder="메모">
                    <button class="add_list">운동 추가하기</button>
                    <button class="add_health">운동 저장하기</button>
                    <div class="health_box">
                        <ul>
                            <li class="c_list">
                                <div class="category">
                                    <select class="cate_select" name="cate">
                                        <option value="Chest" selected>Chest</option>
                                        <option value="Shoulder">Shoulder</option>
                                        <option value="Back">Back</option>
                                        <option value="Leg">Leg</option>
                                        <option value="Biceps">Biceps</option>
                                        <option value="Triceps">Triceps</option>
                                        <option value="Abs">Abs</option>
                                        <option value="Etc">Etc</option>
                                    </select>
                                    <div class="select_value_box">
                                        <p class="select_value">
                                            Chest
                                        </p>
                                        <span class="select_value_btn">
                                            <img src="../img/sort-down-solid.svg" alt="운동 카테고리 선택">
                                        </span>
                                    </div>
                                </div>
                                <div class="insert_info">
                                    <input type="text" class="insert_name" name="insert_name" placeholder="Name">
                                    <input type="text" class="insert_set" name="insert_set" placeholder="Set">
                                    <input type="text" class="insert_weight" name="insert_weight" placeholder="Weight">
                                    <input type="text" class="insert_reps" name="insert_reps" placeholder="Reps">
                                    <div class="insert_remove">
                                        <img src="../img/trash-alt-regular.svg" alt="삭제하기">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>

            <div class="select_category">
                <ul>
                    <li>Chest</li>
                    <li>Shoulder</li>
                    <li>Back</li>
                    <li>Leg</li>
                    <li>Biceps</li>
                    <li>Triceps</li>
                    <li>Abs</li>
                    <li>Etc</li>
                </ul>
            </div>
        </section>
    </main>
    <div class="dimed"></div>
</body>
</html>