<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
  <h2 style="color:red;">My Book Collection</h2>
  <table border="2">
    <tr width="20px" bgcolor="grey">
      <th style="text-align:center;">TITLE</th>
      <th style="text-align:center;">AUTHOR</th>
      <th style="text-align:center;">ISBN</th>
      <th style="text-align:center;">PUBLISHER</th>
      <th style="text-align:center;">EDITION</th>
      <th style="text-align:center;">PRICE</th>
    </tr>
    <xsl:for-each select="catalog/book">
    <tr>
      <td style="color:blue;"><xsl:value-of select="title"/></td>
      <td style="color:darkviolet; font-weight:bold; text-transform: capitalize;"><xsl:value-of select="author" /></td>
      <td style="color:green;"><xsl:value-of select="isbn"/></td>
      <td style="color:skyblue;"><xsl:value-of select="publisher"/></td>
      <td style="color:orange;"><xsl:value-of select="edition"/></td>
      <td style="color:brown;"><xsl:value-of select="price"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>