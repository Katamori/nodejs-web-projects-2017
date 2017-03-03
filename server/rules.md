1.) site structure is defined by the folder structure
      a) in "html" a folder means sub-site...
      b) ...and an HTML file with the same name as the folder must be present

2.) file access structure must follow site structure
      a) every page and sub-site must have a corresponding folder with the
          same name in "files"
      b) any file necessary for a page must be stored within "files" and you
          must be able to reach it as you would reach the page itself
      c) files intended to be used by multiple pages are to be stored within
          the smallest common sub-folder (e.g. "terminus-nation")

3.) files put into "public" are hosted publicly by the server - including "html"
      and "files" alike! Don't put sensitive or private documents into it!

4.) "server" foler contains files not desired to share publically, hence
    only files can access them, and main NodeJS logic is also implemented here
