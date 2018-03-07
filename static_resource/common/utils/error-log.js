/**
 * 记录错误信息
 * 
 * 暂时使用 sentry.io 记录错误信息
 */


export default function ErrorLog(e) {
  if (window.Raven) {
    Raven.captureException(e)
  }
}