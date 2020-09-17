<template>
  <Layout>
    <h1>{{ $page.redditPost.title }}</h1>
    <img :src="$page.redditPost.fields.img.images[0].source.url" alt="img">
    <!-- <div class="markdown-body" v-html="$page.post.content" /> -->
  </Layout>
</template>

<page-query>
query Post ($path: String!){
  redditPost(path: $path){
    title
    path
    fields{
      thumbnail
      img{
        images{
          source{
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.redditPost.title,
    //   img: this.$page.redditPost.img,
    };
  },
};
</script>

<!--style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css");

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style-->