
  
window.addEventListener('load', function () {
  console.log('script running storybridge')
    const { StoryblokBridge } = window
  const storyblokInstance = new StoryblokBridge()
  console.log(storyblokInstance, 'storyblok')
  storyblokInstance.on(['published', 'change'], () => {
  // reload page if save or publish is clicked
  window.location.reload(true)})
})