============
Installation
============

This quickstart walks you through the steps required to add the documentation toolchain to a ScyllaDB project hosted on GitHub.

Prerequisites
-------------

Before adding the documentation toolchain to a project, you will need to have installed **Python +3.7** and **PIP** on your local environment.

If you are on **Windows**, you will need to run ``make`` commands from a Unix-based terminal such as `Git Bash <https://www.atlassian.com/git/tutorials/git-bash>`_.

Step 1: Download the sample project
-----------------------------------

#. Copy the ``docs`` and ``.github`` directories from the repository `scylladb/sphinx-scylladb-theme <https://github.com/scylladb/sphinx-scylladb-theme>`_  to the root directory of the project where you want to set up docs. The project's directory structure should look like the following:

   .. code:: console

      project-name/
         ├── .github/
         |   ├── workflows/
         |   |   ├── docs-pages@vX.yaml
         |   |   ├── docs-pr@vX.yaml
         ├── docs/
         │   ├── _utils/
         │   |   ├── redirections.yaml
         │   |   ├── deploy.sh
         │   |   ├── setup.sh
         │   ├── source/
         │   ├── Makefile

   .. note:: If you already have docs in the project under an existing ``docs`` directory, move the doc files to ``docs/source`` directory.

#. Create the file ``docs/pyproject.toml`` under the new ``docs`` folder. Copy the contents from the `pyproject.toml template <docs/_utils/pyproject_template.toml>`_.

Step 2: Configure the theme
---------------------------

#. Edit the file ``docs/source/conf.py`` file to suit the project needs (e.g., edit the project name and site description, install new extensions, ...).
   For more information, see :doc:`Configuration <../configuration/index>`.

#. If you don't already have a ``.gitignore`` file in the project, place one in the root directory and include ``/docs/_build`` and ``/source/.doctrees`` in it.
   If you already have a ``.gitignore`` file, add both paths to the file.

Step 3: Preview the site locally
--------------------------------

#. Delete or adapt the sample documentation files under ``docs/source``.

#. From the command line, run ``make preview`` within the ``docs`` folder. Fix any warnings raised by Sphinx.

#. Once the docs build without errors, open ``http://127.0.0.1:5500/`` to preview the generated site.

Step 4: Deploy to GitHub Pages
------------------------------

To deploy the documentation site, see :doc:`GitHub Pages Configuration <../github-pages>`.
