<template>
  <div class="container flex flex-col">
    <div class="w1/2">
      <h2 id="Sponcer">Sponcer Content</h2>
    </div>
    <NewCard />
    <a class="text-right" href="#"> See more ></a>
  </div>
</template>

<script>
import NewCard from "~/components/Sport/SponCard";
export default {
  components: {
    NewCard
  }
};
</script>

<style>
#Sponcer {
  overflow: visible;
  width: 103px;
  white-space: nowrap;
  text-align: left;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  color: rgba(50, 61, 83, 1);
  text-decoration: underline;
  -webkit-text-decoration-color: #df503e; /* Safari */
  text-decoration-color: #df503e;
  margin-bottom: 2rem;
  margin-left: 1rem;
}
</style>
