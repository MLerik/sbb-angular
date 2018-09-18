import { NgModule } from '@angular/core';
import { IconArrowsModule } from './base/arrows/sbb-icon-arrows.module';
import { IconBaseModule } from './base/sbb-icon-base.module';
import { IconClockModule } from './base/clock/sbb-icon-clock.module';
import { IconDocumentsModule } from './base/documents/sbb-icon-documents.module';
import { IconHimModule } from './base/him/sbb-icon-him.module';
import { IconSocialMediaModule } from './base/social_media/sbb-icon-social-media.module';
import { IconGreenclassModule } from './campaigns/greenclass/sbb-icon-greenclass.module';
import { IconLeisureHolidaysModule } from './leisure_holidays/sbb-icon-leisure-holidays.module';
import { IconProductsModule } from './products/sbb-icon-products.module';
import { IconWeatherModule } from './weather/sbb-icon-weather.module';
import { IconWebshopArrowsModule } from './webshop/arrows/sbb-icon-arrows.module';
import { IconEnvironmentcalculatorModule } from './webshop/environmentcalculator/sbb-icon-environmentcalculator.module';
import { IconOevModule } from './webshop/oev/sbb-icon-oev.module';
import { IconRealtimeModule } from './webshop/realtime/sbb-icon-realtime.module';
import { IconServiceModule } from './webshop/service/sbb-icon-service.module';
import { IconTrainformationModule } from './webshop/trainformation/sbb-icon-trainformation.module';
import { IconUtilizationModule } from './webshop/utilization/sbb-icon-utilization.module';

@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [IconArrowsModule, IconBaseModule, IconClockModule, IconDocumentsModule, IconHimModule, IconSocialMediaModule, IconGreenclassModule, IconLeisureHolidaysModule, IconProductsModule, IconWeatherModule, IconWebshopArrowsModule, IconEnvironmentcalculatorModule, IconOevModule, IconRealtimeModule, IconServiceModule, IconTrainformationModule, IconUtilizationModule],
  declarations: [],
  // tslint:disable-next-line:max-line-length
  exports: [IconArrowsModule, IconBaseModule, IconClockModule, IconDocumentsModule, IconHimModule, IconSocialMediaModule, IconGreenclassModule, IconLeisureHolidaysModule, IconProductsModule, IconWeatherModule, IconWebshopArrowsModule, IconEnvironmentcalculatorModule, IconOevModule, IconRealtimeModule, IconServiceModule, IconTrainformationModule, IconUtilizationModule]
})
export class IconCommonModule { }
