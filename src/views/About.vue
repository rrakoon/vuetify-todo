<template>
  <div class="about pa-6">
    <h1>This is an {{ $store.state.appTitle }}</h1>
    <div  class="pa-5">
      <p>Vuetify Frame을 이용한 Todo List 작성.<br /></p>
      <p>
        Trello를 사용해보고 이와 유사한것을 만들어보고자 하는 취지로 제작.<br>
        Add Task로 List등록.<br>
         <v-icon>mdi-dots-vertical</v-icon> 에 수정, 삭제, 정렬기능(draggable) 추가.<br>
         indexDB에 Add Task List 저장.<br>
         반응형으로 모바일 및 PC환경에 따라 달라진다.
      </p>
    </div>
  </div>
</template>
