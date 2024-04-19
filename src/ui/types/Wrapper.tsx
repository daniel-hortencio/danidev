export type WrapperProps = {
  as?:
    | 'article'
    | 'aside'
    | 'div'
    | 'footer'
    | 'header'
    | 'main'
    | 'nav'
    | 'section';
  className?: string;
  children: React.ReactNode;
};
