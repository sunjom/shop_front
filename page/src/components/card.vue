<template>
  <div class="card shadow-sm">
    <span class="img" :style="{backgroundImage: `url(${item.imgPath})`}"/>
    <div class="card-body">
      <p class="card-text">
        <span>{{item.name}} &nbsp;</span>
        <span class="discount badge bg-danger">
          {{item.discountPer}}%
        </span>
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <button class="btn btn-primary">구입하기</button>
        <small class="price text-body-secondary">
          {{lib.getNumberFormatted(item.price)}}원
        </small>

        <small class="real text-danger">
          {{lib.getNumberFormatted(item.price-(item.price * item.discountPer/100))}}원
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import lib from "@/scripts/lib";

export default {
  name: "Card",
  props:{
    item: Object
  },
  setup(){
    return {lib}
  }
};
</script>

<style>
.card > .img{
  width:100%;
  height:250px;
  display:inline-block;
  background-size: cover;
  background-position:center;
}
.price{
  text-decoration: line-through;
}

</style>
