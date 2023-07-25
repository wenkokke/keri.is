<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ppl="some_identifier"
  version="1.0">
  <xsl:output omit-xml-declaration="no" indent="yes" encoding="UTF-8" />
  <xsl:strip-space elements="*" />
  <!-- Identity transform -->
  <xsl:template match="@* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()" />
    </xsl:copy>
  </xsl:template>
  <!-- Add cow to a person -->
  <xsl:template match="/*">
    <xsl:copy>
      <xsl:copy-of select="@*" />
      <link
        xmlns="http://www.w3.org/1999/xhtml"
        rel="stylesheet"
        href="./strawberry-disaster-flowchart.css"
        type="text/css" />
      <xsl:copy-of select="node()" />
    </xsl:copy>
  </xsl:template>
</xsl:stylesheet>