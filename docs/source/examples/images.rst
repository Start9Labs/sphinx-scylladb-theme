Images
======

There are two possible directives for images. One is the image directive and the other is the figure directive.
Refer to `DocUtils <https://docutils.sourceforge.io/docs/ref/rst/directives.html#images>`_ for more options.

.. code-block:: none

  .. image:: checkmark.png
      :alt: checkmark

renders the image

.. image:: checkmark.png
   :alt: checkmark


Whereas the Figure directive allows you to use captions.

.. code-block:: none

   .. figure:: checkmark.png
      :alt: checkmark

   This is the caption for the image

Renders the image as:

.. figure:: checkmark.png
   :alt: checkmark

   This is the caption for the image

Resize images
-------------

You can resize images (and figures) with the option ``width``.
When a reader clicks on an image with this option set, the image opens in a popup in full size.
This is handy when images are too small to be read from the documentation page.

For example:

.. code-block:: none

   .. figure:: diagram.svg
      :width: 150px

Renders the image as:

.. figure:: diagram.svg
   :width: 150px

Click on the image to preview it in full size.
