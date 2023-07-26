<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.0">
  <xsl:output omit-xml-declaration="no" indent="yes" encoding="UTF-8" />
  <xsl:strip-space elements="*" />
  <!-- Identity transform. -->
  <xsl:template match="@* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()" />
    </xsl:copy>
  </xsl:template>
  <!-- Add a style tag. -->
  <xsl:template match="/*">
    <xsl:copy>
      <xsl:copy-of select="@*" />
      <xsl:apply-templates
        select="node()" />
    </xsl:copy>
  </xsl:template>
  <!-- Change font-family to Handlee. -->
  <xsl:template match="@font-family">
    <xsl:attribute name="font-family">
      <xsl:text>Handlee</xsl:text>
    </xsl:attribute>
  </xsl:template>
</xsl:stylesheet>