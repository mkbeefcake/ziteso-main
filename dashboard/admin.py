from django.contrib import admin
from .models import (CompanyInformation
,YourBusinessRecommendation
,YourCurrentTradelines
,ZitesoBusinessIntelligenceScore
,BusinessReports
,UpdateYourCompanyInformation
,Dispute,ZitesoScore)
# Register your models here.

admin.site.register(CompanyInformation)
admin.site.register(YourBusinessRecommendation)
admin.site.register(YourCurrentTradelines)
admin.site.register(ZitesoBusinessIntelligenceScore)
admin.site.register(BusinessReports)
admin.site.register(UpdateYourCompanyInformation)
admin.site.register(Dispute)
admin.site.register(ZitesoScore)