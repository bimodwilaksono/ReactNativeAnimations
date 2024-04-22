package com.reactnativeanimations;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class StringFromJNI extends ReactContextBaseJavaModule {
    StringFromJNI(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    private static final String TAG = "StringFromJNI";

    static {
        try {
            System.loadLibrary("native-lib.cpp");
            Log.d(TAG, "-------- libcpp-code: loaded");
        } catch (Exception e) {
            Log.d(TAG, "-------- libcpp-code: error loaded");
        }
    }

    @NonNull
    @Override
    public String getName() {
        return "StringFromJNI";
    }

    public static native String stringFromJNI();
}
