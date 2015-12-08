
# EnlabHQ.com Dev Spec

------------------------

### Purpose
This spec is to make sure development on the EnLabHQ website is done under a common set of conventions.

### Goal
The goal for the website is to have a main website with a blog, as well as a CMS for the team to use.

------------------------

### Routes

#### Main Site
* `http://enlabhq.com/` - The main home page of EnLab
* `http://enlabhq.com/about` - The description of who we are & what we believe and team
* `http://enlabhq.com/team/:name` - Home Page of team member. Who they are and what they do and a quick look at their blog enteries (5 latest)
* `http://enlabhq.com/team/:name/:blog` - Team members blog
* `http://enlabhq.com/hire` - Consulting service info
* `http://enlabhq.com/join` - For seeking non-technical founders and new team members.
* `http://enlabhq.com/blog` - Visitors to the site can view all blog posts
* `http://enlabhq.com/blog/:pubdate/:tag/:title` - Loads blog post with given title
* `http://enlabhq.com/manifesto/:name/:title` - EnLab Manifesto.Team members that produce posts that speak to our core culture & beliefs...gets a post here.

------------------------

#### CMS
* `http://enlabhq.com/login` - Content creators can log into the CMS
* `http://enlabhq.com/:username/home` - Content creators can view their previous posts and current drafts
* `http://enlabhq.com/draft/:title/edit` - Editable drafts
