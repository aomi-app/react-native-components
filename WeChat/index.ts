import { NativeModules } from 'react-native';

const { WeChatManager } = NativeModules;

export interface TypeProps {
  // 文本分享
  text: number;
  // 图片分享
  image: number;
  // 音乐分享
  music: number;
  // 视频分享
  video: number;
  // 网页分享
  webPage: number;
}

export interface SceneProps {
  // 微信会话
  session: number;
  // 朋友圈
  timeLine: number;
  // 收藏
  favorite: number;
}

export interface Options {
  scene: SceneProps;
  type: TypeProps;
  text: String;
  description: String;
  mediaTagName: String;
  messageAction: String;
  messageExt: String;
  image: String;
  thumbImageSize: Number;
  webPageUrl: String;
}

export const Scene: SceneProps = WeChatManager.scene;

export const Type: TypeProps = WeChatManager.type;

/**
 * @author 田尘殇Sean(sean.snow@live.com)
 * @date 2017/5/17
 */
class WeChat {
  /**
   * 向微信注册
   * @param appId appId
   */
  static registerApp(appId: String) {
    return WeChatManager.registerApp(appId);
  }

  /**
   * 分享
   * @param options 分享参数
   */
  static share(options: Options) {
    return WeChatManager.share(options);
  }
}

export default WeChat;
