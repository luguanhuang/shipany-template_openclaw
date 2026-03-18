import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import { i18n } from '@/core/docs/source';
import { envConfigs } from '@/config';

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    links: [],
    nav: {
      title: (
        <>
          <span title={envConfigs.app_name}>
            <Image
              src={envConfigs.app_logo}
              alt={envConfigs.app_name}
              width={28}
              height={28}
              className=""
            />
          </span>
          <span className="text-primary text-lg font-bold">
            {envConfigs.app_name}
          </span>
        </>
      ),
      transparentMode: 'top',
    },
    i18n,
  };
}
