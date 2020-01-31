const files = [];
$(document).ready( function() {
        $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
        });

        $('.btn-file :file').on('fileselect', function(event, label) {
            
            var input = $(this).parents('.input-group').find(':text'),
                log = label;
            
            if( input.length ) {
                input.val(log);
            }
        
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#img-upload').attr('src', e.target.result);
                    
                    files.push(e.target.result);
                    console.log(files);
                }
                
               reader.readAsDataURL(input.files[0]);
                
            }
        }

        $("#imgInp").change(function(){
            readURL(this);
        }); 	
    });
    $(document).ready( function() {
        $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
        });

        $('.btn-file :file').on('fileselect', function(event, label) {
            
            var input = $(this).parents('.input-group').find(':text'),
                log = label;
            
            if( input.length ) {
                input.val(log);
            }
        
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#img2-upload').attr('src', e.target.result);
                    
                    files.push(e.target.result);
                    console.log(files);
                }
                
               reader.readAsDataURL(input.files[0]);
                
            }
        }

        $("#imgInp2").change(function(){
            readURL(this);
        }); 	
    });
    $(document).ready( function() {
        $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
        });

        $('.btn-file :file').on('fileselect', function(event, label) {
            
            var input = $(this).parents('.input-group').find(':text'),
                log = label;
            
            if( input.length ) {
                input.val(log);
            }
        
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#img3-upload').attr('src', e.target.result);
                    
                    files.push(e.target.result);
                    console.log(files);
                }
                
               reader.readAsDataURL(input.files[0]);
                
            }
        }

        $("#imgInp3").change(function(){
            readURL(this);
        }); 	
    });
    $(document).ready( function() {
        $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
        });

        $('.btn-file :file').on('fileselect', function(event, label) {
            
            var input = $(this).parents('.input-group').find(':text'),
                log = label;
            
            if( input.length ) {
                input.val(log);
            }
        
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#img4-upload').attr('src', e.target.result);
                    
                    files.push(e.target.result);
                    console.log(files);
                }
                
               reader.readAsDataURL(input.files[0]);
                
            }
        }

        $("#imgInp4").change(function(){
            readURL(this);
        }); 	
    });
    $(document).ready( function() {
        $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
        });

        $('.btn-file :file').on('fileselect', function(event, label) {
            
            var input = $(this).parents('.input-group').find(':text'),
                log = label;
            
            if( input.length ) {
                input.val(log);
            }
        
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#img5-upload').attr('src', e.target.result);
                    
                    files.push(e.target.result);
                    console.log(files);
                }
                
               reader.readAsDataURL(input.files[0]);
                
            }
        }

        $("#imgInp5").change(function(){
            readURL(this);
        }); 	
    });
    $(document).ready( function() {
        $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
        });

        $('.btn-file :file').on('fileselect', function(event, label) {
            
            var input = $(this).parents('.input-group').find(':text'),
                log = label;
            
            if( input.length ) {
                input.val(log);
            }
        
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#img6-upload').attr('src', e.target.result);
                    
                    files.push(e.target.result);
                    console.log(files);
                }
                
               reader.readAsDataURL(input.files[0]);
                
            }
        }

        $("#imgInp6").change(function(){
            readURL(this);
        }); 	
    });
    $(document).ready( function() {
        $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
        });

        $('.btn-file :file').on('fileselect', function(event, label) {
            
            var input = $(this).parents('.input-group').find(':text'),
                log = label;
            
            if( input.length ) {
                input.val(log);
            }
        
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#img7-upload').attr('src', e.target.result);
                    
                    files.push(e.target.result);
                    console.log(files);
                }
                
               reader.readAsDataURL(input.files[0]);
                
            }
        }

        $("#imgInp7").change(function(){
            readURL(this);
        }); 	
    });
    $(document).ready( function() {
        $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
        });

        $('.btn-file :file').on('fileselect', function(event, label) {
            
            var input = $(this).parents('.input-group').find(':text'),
                log = label;
            
            if( input.length ) {
                input.val(log);
            }
        
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#img8-upload').attr('src', e.target.result);
                    
                    files.push(e.target.result);
                    console.log(files);
                }
                
               reader.readAsDataURL(input.files[0]);
                
            }
        }

        $("#imgInp8").change(function(){
            readURL(this);
        }); 	
    });
    $(document).ready( function() {
        $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
        });

        $('.btn-file :file').on('fileselect', function(event, label) {
            
            var input = $(this).parents('.input-group').find(':text'),
                log = label;
            
            if( input.length ) {
                input.val(log);
            }
        
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#img9-upload').attr('src', e.target.result);
                    
                    files.push(e.target.result);
                    console.log(files);
                }
                
               reader.readAsDataURL(input.files[0]);
                
            }
        }

        $("#imgInp9").change(function(){
            readURL(this);
        }); 	
    });
function post() {
   const name = document.getElementById("nombrePlato1").value;
   var url = `http://localhost/image/${files[0]}/${name}`;
   var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
}