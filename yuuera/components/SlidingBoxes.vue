<template>
 <body>
    <div id="container">
     <div class="box">Moving Box</div>
       </div>
</body>
</template>
<!--So I started with some css here, Looked up one of the ways we could get the box to move and tried to implment it with my level of understanding-->
<script lang="scss">

.container{
    margin:0 auto 10px;
    border:1px #aaa solid;
    padding: 10px 0; 
    width: 300px;
    height: 100px;
}
.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    width: 45px;
    height: 45px;
    background-color: #A3CFFA;
    -webkit-transition: margin-left 4s ease;
    transition: margin-left 4s ease;
}

.container:hover .box {
    margin-left: 255px;
}
</script>