import React from 'react';
import Button from '@/src/components/ui/Button';
import * as LucideIcons from 'lucide-react';

interface SanityButtonData {
  text: string;
  link: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  openInNewTab?: boolean;
}

interface SanityButtonProps {
  data: SanityButtonData;
  className?: string;
}

export const SanityButton: React.FC<SanityButtonProps> = ({ data, className }) => {
  if (!data?.text || !data?.link) return null;

  // Get the icon component if specified
  const IconComponent = data.icon 
    ? (LucideIcons as any)[data.icon] 
    : undefined;

  // Handle external links
  const isExternal = data.link.startsWith('http') || data.link.startsWith('https');
  const shouldOpenInNewTab = data.openInNewTab || isExternal;

  if (shouldOpenInNewTab) {
    return (
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <Button
          variant={data.variant}
          size={data.size}
          icon={IconComponent}
          iconPosition={data.iconPosition}
        >
          {data.text}
        </Button>
      </a>
    );
  }

  return (
    <Button
      href={data.link}
      variant={data.variant}
      size={data.size}
      icon={IconComponent}
      iconPosition={data.iconPosition}
      className={className}
    >
      {data.text}
    </Button>
  );
};

export default SanityButton;
