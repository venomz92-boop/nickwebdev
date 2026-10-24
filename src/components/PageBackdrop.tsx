export function PageBackdrop() {
  return (
    <div className="page-backdrop" aria-hidden="true">
      <span className="page-backdrop__grid" />
      <span className="page-backdrop__guide page-backdrop__guide--x" />
      <span className="page-backdrop__guide page-backdrop__guide--y" />
      <span className="page-backdrop__scan" />
    </div>
  );
}
