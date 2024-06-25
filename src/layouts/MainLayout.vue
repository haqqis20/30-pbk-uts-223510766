<template>
  <q-layout view="lHr lpR lfr" class="custom-background">
    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>UAS Haqqi Syahputra</q-toolbar-title>
        <q-tabs align="left">
          <q-route-tab to="/" label="Todo List" />
          <q-route-tab to="/post" label="Post" />
          <q-route-tab to="/album" label="Album" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          Copyright © Haqqi®. All rights reserved.
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup></script>

<style>
.q-toolbar {
  padding: 0 75px !important;
}
.q-toolbar__title:first-child {
  padding-left: 32px !important;
}
.q-tab {
  padding: 0 20px !important;
  min-height: 75px !important;
}
.custom-background {
  background: linear-gradient(
    to bottom right,
    rgb(136, 235, 202),
    rgb(139, 226, 218)
  );
}
</style>
