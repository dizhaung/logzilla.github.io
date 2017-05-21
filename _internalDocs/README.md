# Site
The original site was from a markdown template purchased from [Wrapbootstrap](https://wrapbootstrap.com/theme/velocity-designed-for-products-WB0N38R04)
After purchase, many of the pages were either removed or customized for our needs. The blog in the bootstrap "template" was completely removed because it was nothing more than just a static html page with no editing capability or options to add articles other than manually via html coding.

In order to allow the sales teams to easily post articles, I converted the bootstrap template from the original into something capable of using [Jekyll](http://jekyllrb.com)

This also allows the use of various "template" options which can easily be set by the sales team directly in the markdown text file they author.

Each markdown-based article should start with the following text. This text is read by Jekyll to allow these variables to be used when converting them to html. For example:


	---
	published: true
	layout: page
	title: WC Title
	subtitle: WC Subtitle
	author: Mark Wheat <mwheat@logzilla.net>
	summary: LogZilla's Malware Detection capability is so easy that it will make you wannacry...
	tags: Malware Dashboards Triggers
	img: assets/images/blog/hacker-silhouette.jpg
	img-position: left
	
	---
	
**Published**

Set to `true` or `false`. If it is `false`, it will not show up on the website.

**layout**

Do not change this. It is used to define the layout used for the html display pages.

**title, subtitle, author, summary**

Should be obvious what these are for :)

**tags**

Free-form: set any tags you want to be associated with your post. 

**img**

Sets the image used in the small block area on the blog.html page. 

**img-position**

The two options are `left` and `right`. Check the blog page and see if the next article should be left-justified or right. I may just automate this later, but for now, just set it manually.


# Images
There are a ton of royalty free images at [Pixabay](https://pixabay.com) which may be used to blog articles and the `img` tags used above.